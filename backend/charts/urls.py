from django.urls import path
from .views import (
    get_candlestick_data,
    get_line_chart_data,
    get_bar_chart_data,
    get_pie_chart_data,
)

urlpatterns = [
    path("api/candlestick-data/", get_candlestick_data),
    path("api/line-chart-data/", get_line_chart_data),
    path("api/bar-chart-data/", get_bar_chart_data),
    path("api/pie-chart-data/", get_pie_chart_data),
]
