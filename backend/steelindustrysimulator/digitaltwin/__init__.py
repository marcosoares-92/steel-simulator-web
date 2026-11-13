"""STEEL INDUSTRY DIGITAL TWIN PACKAGE
Simulate steel industry energy consumption using Deep Learning.

Public data from a DAEWOO Steel Co. Ltd facility in Gwangyang, South Korea (UCI).

Marco César Prado Soares, PhD. Data Coordinator.
marcosoares.feq@gmail.com

UI designed with AI support (Cursor / Composer).
For training, testing, experimenting and didactic purposes only.
No proprietary information is used.
"""

from .core import (
    run_simulation,
    visualize_usage_kwh,
    download_excel_with_data,
    run_simulation_web,
    build_excel_bytes,
)


def digitaltwin_start_msg(PT=True):
    """Return welcome text (PT or EN). Does not print."""
    if PT:
        return (
            "Bem-vindo ao gêmeo digital da indústria siderúrgica! "
            "Objetivo: minimizar o consumo de energia (kWh). "
            "Dados públicos da DAEWOO Steel Co. Ltd (Gwangyang, Coreia do Sul / UCI). "
            "Uso didático e experimental apenas; nenhuma informação proprietária."
        )
    return (
        "Welcome to the Steel Industry Digital Twin! "
        "Goal: minimize energy consumption (kWh). "
        "Public data from DAEWOO Steel Co. Ltd (Gwangyang, South Korea / UCI). "
        "For training, testing, experimenting and didactic purposes only; no proprietary data."
    )


def start_digital_twin(PT=True):
    """Compatibility shim for Colab notebooks — returns the welcome message."""
    return digitaltwin_start_msg(PT=PT)
