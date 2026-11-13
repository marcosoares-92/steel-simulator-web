(() => {
  const I18N = {
    pt: {
      title: "Steel Industry Digital Twin",
      subtitle: "Painel de Controle da Fábrica",
      kpi_sims: "SIMULAÇÕES",
      kpi_mean: "kWh MÉDIO",
      kpi_total: "kWh TOTAL",
      kpi_hours: "HORAS",
      tab_plant: "FÁBRICA",
      tab_data: "DADOS E GRÁFICOS",
      tab_guide: "GUIA DOS PARÂMETROS",
      tab_about: "MISSÃO E APOIO",
      hs_load: "Carga",
      hs_energy: "Energia",
      hs_goal: "Objetivo",
      hs_goal_val: "Minimizar kWh",
      controls_title: "Condições de operação",
      controls_hint: "Abra cada item para ler o significado. Em seguida use os botões da barra inferior.",
      help_time_sum: "Horizonte temporal",
      help_time: "Data de início + dias + horas extras = duração horária da planta. Padrão 1 dia e 0 horas = 24 h. Máx. 14 dias neste demo.",
      help_lag_q_sum: "Potência reativa atrasada (kVArh)",
      help_lag_q: "Lagging Current reactive power. Variável elétrica de entrada do gêmeo digital (faixa do dataset horário público).",
      help_lead_q_sum: "Potência reativa principal (kVArh)",
      help_lead_q: "Leading Current reactive power. Também usada para derivar o fator de potência leading por correlação linear + ruído.",
      help_co2_sum: "tCO2 (ppm CO2)",
      help_co2: "Indicador de CO2 associado à operação (variável contínua do dataset UCI).",
      help_lag_pf_sum: "Fator de potência atrasada (%)",
      help_lag_pf: "Lagging Current power factor (%). Entrada direta do painel; influencia o cluster elétrico e a previsão de kWh.",
      help_load_sum: "Tipo de carga",
      help_load: "Light_Load, Medium_Load ou Maximum_Load — categorias do dataset. Codificadas em one-hot no pipeline.",
      lbl_start: "Início",
      lbl_days: "Total de dias",
      lbl_hours: "Total de horas extras",
      lbl_lag_q: "Potência reativa atrasada (kVArh)",
      lbl_lead_q: "Potência reativa principal (kVArh)",
      lbl_co2: "tCO2 (ppm CO2)",
      lbl_lag_pf: "Fator de potência atrasada (%)",
      lbl_load: "Tipo de carga",
      gazette_idle: "Gazeta da fábrica: aguardando partida da produção.",
      gazette_ok: "Gazeta da fábrica: simulação #{n} concluída. kWh médio = {mean}. Veja Dados e Gráficos.",
      gazette_err: "Gazeta da fábrica: falha — {err}",
      btn_run: "INICIAR DIA DE PRODUÇÃO",
      btn_run_help: "Executa o gêmeo digital (KMeans + encoder-decoder) e prevê o consumo horário em kWh. Resultado na aba Dados e Gráficos.",
      btn_excel: "BAIXAR EXCEL",
      btn_excel_help: "Exporta todas as simulações da sessão (dados + relatório). Requer ao menos uma simulação concluída.",
      chart_title: "Consumo energético (kWh)",
      chart_hint: "Plotly interativo: zoom, pan e exportar PNG pelo ícone de câmera na barra do gráfico.",
      table_title: "Tabela da última simulação",
      guide_title: "Guia dos parâmetros e da resposta",
      guide_intro: "Digital twin baseado em dados públicos UCI de uma planta siderúrgica de pequena escala (Gwangyang). Objetivo didático: minimizar o consumo previsto de energia.",
      guide_resp: "Resposta principal: usage_kwh (consumo energético horário).",
      guide_extra: "Também retorna leading PF, NSM, weekstatus e day_of_week.",
      guide_models: "Runtime: KMeans + TensorFlow encoder-decoder (SavedModel).",
      guide_actions: "Fluxo: ajuste → Iniciar dia → gráfico/tabela → Excel / PNG Plotly.",
      about_title: "Missão e material de apoio",
      about_goal: "Meta: explorar parâmetros para reduzir o consumo previsto de energia (kWh).",
      about_public: "Usa dados públicos (UCI Steel Industry Energy Consumption).",
      about_didactic: "Treinamento, testes, experimentação e fins didáticos.",
      about_no_prop: "Nenhuma informação proprietária é utilizada.",
      loading: "Calculando consumo energético…",
    },
    en: {
      title: "Steel Industry Digital Twin",
      subtitle: "Factory Control Panel",
      kpi_sims: "SIMULATIONS",
      kpi_mean: "MEAN kWh",
      kpi_total: "TOTAL kWh",
      kpi_hours: "HOURS",
      tab_plant: "FACTORY",
      tab_data: "DATA & CHARTS",
      tab_guide: "PARAMETER GUIDE",
      tab_about: "MISSION & SUPPORT",
      hs_load: "Load",
      hs_energy: "Energy",
      hs_goal: "Goal",
      hs_goal_val: "Minimize kWh",
      controls_title: "Operating conditions",
      controls_hint: "Expand each item to read the meaning. Then use the bottom action buttons.",
      help_time_sum: "Time horizon",
      help_time: "Start date + days + extra hours = hourly plant duration. Default 1 day and 0 hours = 24 h. Max 14 days in this demo.",
      help_lag_q_sum: "Lagging reactive power (kVArh)",
      help_lag_q: "Lagging Current reactive power. Electrical input of the digital twin (public hourly dataset range).",
      help_lead_q_sum: "Leading reactive power (kVArh)",
      help_lead_q: "Leading Current reactive power. Also used to derive leading power factor via linear correlation + noise.",
      help_co2_sum: "tCO2 (ppm CO2)",
      help_co2: "CO2 indicator linked to operation (continuous UCI variable).",
      help_lag_pf_sum: "Lagging power factor (%)",
      help_lag_pf: "Lagging Current power factor (%). Direct panel input; affects the electric cluster and kWh forecast.",
      help_load_sum: "Load type",
      help_load: "Light_Load, Medium_Load or Maximum_Load — dataset categories, one-hot encoded in the pipeline.",
      lbl_start: "Start",
      lbl_days: "Total days",
      lbl_hours: "Extra hours",
      lbl_lag_q: "Lagging reactive power (kVArh)",
      lbl_lead_q: "Leading reactive power (kVArh)",
      lbl_co2: "tCO2 (ppm CO2)",
      lbl_lag_pf: "Lagging power factor (%)",
      lbl_load: "Load type",
      gazette_idle: "Factory gazette: waiting to start production.",
      gazette_ok: "Factory gazette: simulation #{n} complete. Mean kWh = {mean}. See Data & Charts.",
      gazette_err: "Factory gazette: failure — {err}",
      btn_run: "START PRODUCTION DAY",
      btn_run_help: "Runs the digital twin (KMeans + encoder-decoder) and predicts hourly kWh. Results open in Data & Charts.",
      btn_excel: "DOWNLOAD EXCEL",
      btn_excel_help: "Exports all session simulations (data + report). Needs at least one completed run.",
      chart_title: "Energy consumption (kWh)",
      chart_hint: "Interactive Plotly: zoom, pan, and export PNG via the camera icon on the chart toolbar.",
      table_title: "Latest simulation table",
      guide_title: "Parameter and response guide",
      guide_intro: "Digital twin based on public UCI data from a small-scale steel plant (Gwangyang). Didactic goal: minimize predicted energy use.",
      guide_resp: "Main response: usage_kwh (hourly energy consumption).",
      guide_extra: "Also returns leading PF, NSM, weekstatus and day_of_week.",
      guide_models: "Runtime: KMeans + TensorFlow encoder-decoder (SavedModel).",
      guide_actions: "Flow: set params → Start day → chart/table → Excel / Plotly PNG.",
      about_title: "Mission and support material",
      about_goal: "Goal: explore settings to reduce predicted energy use (kWh).",
      about_public: "Uses public data (UCI Steel Industry Energy Consumption).",
      about_didactic: "For training, testing, experimenting and didactic purposes.",
      about_no_prop: "No proprietary information is used.",
      loading: "Computing energy consumption…",
    },
  };

  let lang = document.body.dataset.lang || "pt";
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  function t(key, vars = {}) {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
    Object.keys(vars).forEach((k) => { s = s.replace(`{${k}}`, vars[k]); });
    return s;
  }

  function applyI18n() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.documentElement.lang = lang;
    $("#btn-pt").classList.toggle("active", lang === "pt");
    $("#btn-en").classList.toggle("active", lang === "en");
  }

  function fmt(id, val) {
    return Number(val).toFixed(3);
  }

  function syncSliders() {
    ["lagging_q", "leading_q", "co2", "lagging_pf"].forEach((id) => {
      const shown = fmt(id, $("#" + id).value);
      $("#val-" + id).textContent = shown;
      $("#meter-" + id).textContent = shown;
    });
    $("#hs-load").textContent = $("#load_type").value;
  }

  function setLoader(on) {
    $("#loader").classList.toggle("hidden", !on);
    $("#btn-run").disabled = on;
  }

  function renderTable(columns, rows) {
    const thead = $("#results-table thead");
    const tbody = $("#results-table tbody");
    thead.innerHTML = "";
    tbody.innerHTML = "";
    if (!columns || !columns.length) return;
    const hr = document.createElement("tr");
    columns.forEach((c) => {
      const th = document.createElement("th");
      th.textContent = c;
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    rows.slice(0, 250).forEach((row) => {
      const tr = document.createElement("tr");
      columns.forEach((c) => {
        const td = document.createElement("td");
        const v = row[c];
        td.textContent = typeof v === "number" ? Number(v).toFixed(4) : v;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  function renderChart(payload) {
    const el = $("#kwh-chart");
    if (!el || typeof Plotly === "undefined") return;
    const trace = {
      x: payload.x,
      y: payload.y,
      type: "scatter",
      mode: "lines",
      name: payload.y_label,
      line: { color: "#f0a04a", width: 2.5 },
      fill: "tozeroy",
      fillcolor: "rgba(224,122,47,0.18)",
    };
    const layout = {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(12,16,20,0.7)",
      font: { color: "#eef2f5", family: "Rajdhani, sans-serif" },
      margin: { t: 28, r: 24, b: 56, l: 64 },
      xaxis: { title: payload.x_label, gridcolor: "rgba(58,70,82,0.45)", zeroline: false },
      yaxis: { title: payload.y_label, gridcolor: "rgba(58,70,82,0.45)", zeroline: false },
      hovermode: "x unified",
    };
    const config = {
      responsive: true,
      displaylogo: false,
      toImageButtonOptions: {
        format: "png",
        filename: "steel_simulator_kwh",
        height: 650,
        width: 1100,
        scale: 2,
      },
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    };
    Plotly.newPlot(el, [trace], layout, config);
  }

  async function setLanguage(next) {
    lang = next;
    document.body.dataset.lang = lang;
    applyI18n();
    try {
      const res = await fetch("/api/language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang }),
      });
      const data = await res.json();
      if (data.welcome) $("#welcome-text").textContent = data.welcome;
    } catch (_) { /* UI still switches */ }
  }

  async function runSimulation() {
    setLoader(true);
    const payload = {
      lang,
      start_date: $("#start_date").value,
      total_days: Number($("#total_days").value),
      total_hours: Number($("#total_hours").value),
      lagging_q: Number($("#lagging_q").value),
      leading_q: Number($("#leading_q").value),
      co2: Number($("#co2").value),
      lagging_pf: Number($("#lagging_pf").value),
      load_type: $("#load_type").value,
    };
    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Simulation failed");
      const s = data.summary;
      $("#kpi-sims").textContent = String(s.simulation_number);
      $("#kpi-mean").textContent = s.mean_kwh.toFixed(2);
      $("#kpi-total").textContent = s.total_kwh.toFixed(1);
      $("#kpi-hours").textContent = String(s.n_hours);
      $("#hs-energy").textContent = `${s.mean_kwh.toFixed(2)} kWh`;
      $("#gazette").textContent = t("gazette_ok", {
        n: s.simulation_number,
        mean: s.mean_kwh.toFixed(2),
      });
      renderTable(data.columns, data.rows);
      renderChart(data.chart);
      $$(".tab").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === "data"));
      $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-data"));
    } catch (err) {
      $("#gazette").textContent = t("gazette_err", { err: err.message || String(err) });
    } finally {
      setLoader(false);
    }
  }

  function initTabs() {
    $$(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.tab;
        $$(".tab").forEach((b) => b.classList.toggle("active", b === btn));
        $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === `panel-${id}`));
        if (id === "data" && $("#kwh-chart") && typeof Plotly !== "undefined") {
          Plotly.Plots.resize($("#kwh-chart"));
        }
      });
    });
  }

  function init() {
    applyI18n();
    syncSliders();
    initTabs();
    ["lagging_q", "leading_q", "co2", "lagging_pf"].forEach((id) => {
      $("#" + id).addEventListener("input", syncSliders);
    });
    $("#load_type").addEventListener("change", syncSliders);
    $("#btn-run").addEventListener("click", runSimulation);
    $("#btn-pt").addEventListener("click", () => setLanguage("pt"));
    $("#btn-en").addEventListener("click", () => setLanguage("en"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
