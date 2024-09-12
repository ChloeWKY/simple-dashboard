from django.urls import path
from .views import (
    get_candlestick_data,
    get_line_chart_data,
    get_bar_chart_data,
    get_pie_chart_data,
)

urlpatterns = [
    path("api/candlestick-data/", get_candlestick_data, name="candlestick-data"),
    path("api/line-chart-data/", get_line_chart_data, name="line-chart-data"),
    path("api/bar-chart-data/", get_bar_chart_data, name="bar-chart-data"),
    path("api/pie-chart-data/", get_pie_chart_data, name="pie-chart-data"),
]
