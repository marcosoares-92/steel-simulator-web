"""
Steel Industry Digital Twin — Flask web application (Tycoon-style factory panel).

Marco César Prado Soares, PhD. Data Coordinator.
marcosoares.feq@gmail.com

UI designed with AI support (Cursor / Composer).
Public UCI data — training, testing, experimenting and didactic use only.
No proprietary information is used.
"""

from __future__ import annotations

import io
import os
import sys
import threading
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
BACKEND_DIR = BASE_DIR / "backend"

# Required so package imports and (legacy) relative data paths resolve.
os.chdir(BACKEND_DIR)
sys.path.insert(0, str(BACKEND_DIR))

from flask import (  # noqa: E402
    Flask,
    jsonify,
    render_template,
    request,
    send_file,
    session,
)

from steelindustrysimulator.digitaltwin import (  # noqa: E402
    digitaltwin_start_msg,
    run_simulation_web,
    build_excel_bytes,
)
from steelindustrysimulator.digitaltwin.core import GlobalVars  # noqa: E402

app = Flask(
    __name__,
    static_folder=str(BASE_DIR / "static"),
    template_folder=str(BASE_DIR / "templates"),
)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "steel-simulator-didactic-public-key")

_sim_lock = threading.Lock()

PARAM_RANGES = {
    "lagging_q": {
        "min": float(GlobalVars.possible_ranges["lagging_current_reactive_power_kvarh"]["min"]),
        "max": float(GlobalVars.possible_ranges["lagging_current_reactive_power_kvarh"]["max"]),
        "default": 37.119,
        "step": 0.001,
    },
    "leading_q": {
        "min": float(GlobalVars.possible_ranges["leading_current_reactive_power_kvarh"]["min"]),
        "max": float(GlobalVars.possible_ranges["leading_current_reactive_power_kvarh"]["max"]),
        "default": 13.877,
        "step": 0.001,
    },
    "co2": {
        "min": float(GlobalVars.possible_ranges["co2_tco2"]["min"]),
        "max": float(GlobalVars.possible_ranges["co2_tco2"]["max"]),
        "default": 0.029,
        "step": 0.001,
    },
    "lagging_pf": {
        "min": float(GlobalVars.possible_ranges["lagging_current_power_factor"]["min"]),
        "max": float(GlobalVars.possible_ranges["lagging_current_power_factor"]["max"]),
        "default": 73.2925,
        "step": 0.001,
    },
}

LOAD_TYPES = ["Light_Load", "Medium_Load", "Maximum_Load"]


@app.route("/")
def index():
    lang = session.get("lang", "pt")
    return render_template(
        "index.html",
        ranges=PARAM_RANGES,
        load_types=LOAD_TYPES,
        lang=lang,
        welcome=digitaltwin_start_msg(PT=(lang != "en")),
        author="Marco César Prado Soares, PhD. Data Coordinator. marcosoares.feq@gmail.com",
        ai_credit="UI designed with AI support (Cursor / Composer).",
    )


@app.route("/api/language", methods=["POST"])
def api_language():
    data = request.get_json(force=True, silent=True) or {}
    lang = data.get("lang", "pt")
    if lang not in ("pt", "en"):
        lang = "pt"
    session["lang"] = lang
    return jsonify({"lang": lang, "welcome": digitaltwin_start_msg(PT=(lang != "en"))})


@app.route("/api/simulate", methods=["POST"])
def api_simulate():
    data = request.get_json(force=True, silent=True) or {}
    lang = data.get("lang") or session.get("lang", "pt")
    session["lang"] = lang

    try:
        start_date = str(data.get("start_date", "2024-02-21"))
        total_days = int(data.get("total_days", 1))
        total_hours = int(data.get("total_hours", 0))
        lagging_q = float(data.get("lagging_q", PARAM_RANGES["lagging_q"]["default"]))
        leading_q = float(data.get("leading_q", PARAM_RANGES["leading_q"]["default"]))
        co2 = float(data.get("co2", PARAM_RANGES["co2"]["default"]))
        lagging_pf = float(data.get("lagging_pf", PARAM_RANGES["lagging_pf"]["default"]))
        load_type = str(data.get("load_type", "Light_Load"))
    except (TypeError, ValueError) as exc:
        return jsonify({"ok": False, "error": f"Invalid parameters: {exc}"}), 400

    if load_type not in LOAD_TYPES:
        return jsonify({"ok": False, "error": "Invalid load type"}), 400
    if total_days < 0 or total_hours < 0:
        return jsonify({"ok": False, "error": "Days/hours must be >= 0"}), 400
    if total_days * 24 + total_hours > 24 * 14:
        return jsonify({
            "ok": False,
            "error": "Span too large for the public demo (max 14 days).",
        }), 400
    if total_days == 0 and total_hours == 0:
        total_days = 1  # default 24h like original docs

    try:
        with _sim_lock:
            result = run_simulation_web(
                start_date, total_days, total_hours,
                lagging_q, leading_q, co2, lagging_pf, load_type,
                language_pt=(lang != "en"),
            )
    except Exception as exc:  # noqa: BLE001
        return jsonify({"ok": False, "error": str(exc)}), 500

    return jsonify({"ok": True, **result})


@app.route("/api/export-excel", methods=["GET"])
def api_export_excel():
    with _sim_lock:
        payload = build_excel_bytes()
    if not payload:
        return jsonify({"ok": False, "error": "No simulations to export"}), 400
    return send_file(
        io.BytesIO(payload),
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        as_attachment=True,
        download_name="steelindustrysimulations.xlsx",
    )


@app.route("/api/status", methods=["GET"])
def api_status():
    return jsonify({
        "ok": True,
        "simulations": GlobalVars.simulation_counter,
        "models_loaded": GlobalVars.kmeans_model is not None
        and GlobalVars.encoder_decoder_tf_model is not None,
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7860))
    app.run(host="0.0.0.0", port=port, debug=False)
