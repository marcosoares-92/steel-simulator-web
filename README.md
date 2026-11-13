---
title: Steel Industry Digital Twin
emoji: 🏭
colorFrom: gray
colorTo: orange
sdk: docker
app_port: 7860
pinned: false
license: mit
---

# Steel Industry Digital Twin

Browser UI for the steel energy-consumption digital twin based on the public
UCI *Steel Industry Energy Consumption* dataset (DAEWOO Steel Co. Ltd, Gwangyang).

**Author:** Marco César Prado Soares, PhD. Data Coordinator. marcosoares.feq@gmail.com  
**UI:** designed with AI support (Cursor / Composer).

Public data only — for training, testing, experimenting and didactic purposes.  
No proprietary information is used.

- UCI: https://archive.ics.uci.edu/ml/datasets/Steel+Industry+Energy+Consumption+Dataset  
- Analytics lineage: [Industrial Data Science Workflow](https://github.com/marcosoares-92/IndustrialDataScienceWorkflow)

## Local run (optional)

```bash
cd web_apps/steel_simulator_web
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:7860

## Deploy

See `DEPLOY.md` in this folder.
