"use client";

import React, { useEffect, useRef } from 'react';
import { createChart, ISeriesApi, ColorType } from 'lightweight-charts';

const CandlestickChartComponent: React.FC = () => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

    useEffect(() => {
        if (chartContainerRef.current) {
            const chart = createChart(chartContainerRef.current, {
                width: 700,
                height: 400,
                layout: {
                    textColor: '#000',
                    background: {
                        type: ColorType.Solid,
                        color: '#FFFFFF',
                    },
                },
                watermark: {
                    visible: false,
                },
                grid: {
                    vertLines: {
                        color: '#e0e0e0',
                    },
                    horzLines: {
                        color: '#e0e0e0',
                    },
                },
                timeScale: {
                    rightOffset: 15, 
                    barSpacing: 25,
                },
            });

            const candlestickSeries = chart.addCandlestickSeries({
                priceScaleId: 'right',
            });

            // Set the scale margins for the chart's price scale
            chart.priceScale('right').applyOptions({
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.1,
                },
            });

            chartRef.current = candlestickSeries;

            // Fetch data from Django backend
            const fetchCandlestickData = async () => {
                const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/');
                const result = await response.json();
                
                const formattedData = result.data.map((item: any) => ({
                    time: item.x,
                    open: item.open,
                    high: item.high,
                    low: item.low,
                    close: item.close,
                }));

                candlestickSeries.setData(formattedData);
            };

            fetchCandlestickData();

            return () => {
                chart.remove();
            };
        }
    }, []);

    return <div ref={chartContainerRef} />;
};

export default CandlestickChartComponent;