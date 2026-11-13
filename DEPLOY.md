# Deploy Steel Industry Digital Twin (browser-first)

Same pattern as the Crop Simulator: **Hugging Face Spaces (Docker)** + personal GitHub.

## A. GitHub repo (browser drag-and-drop)

1. https://github.com/new → personal account → public repo e.g. `steel-simulator-web`
2. Upload **all contents** of `web_apps/steel_simulator_web/` (not the parent folder):
   - `app.py`, `Dockerfile`, `requirements.txt`, `README.md`, `DEPLOY.md`
   - `backend/` (includes `steelindustrysimulator/digitaltwin/` + models/data)
   - `static/`, `templates/`
3. Commit.

**Do not upload** `Case steel_industry_2.0-project analysis/` or presentation PPTX files.

## B. Hugging Face Space

1. https://huggingface.co/ → **New Space**
2. SDK: **Docker**, port **7860**, public
3. Upload/import the same files so `Dockerfile` is at the Space root
4. Wait for build (TensorFlow + sklearn 1.3.1 — first build can take 15–30 min)
5. Open the Space URL and run simulations

## Tips

- Keep spans ≤ 14 days on free CPU Spaces.
- If KMeans fails to load, confirm `scikit-learn==1.3.1` in `requirements.txt`.
- Authorship in UI: personal email only; didactic / public-data disclaimer included.
