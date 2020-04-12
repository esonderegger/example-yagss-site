import React from 'react';
import ReactDOM from 'react-dom';
import LineChartDemo from './01-line-chart.jsx';
import PieChartDemo from './01-pie-chart.jsx';

const nodeOne = document.getElementById('line-chart-demo');
ReactDOM.render(<LineChartDemo />, nodeOne);

const nodeTwo = document.getElementById('pie-chart-demo');
ReactDOM.render(<PieChartDemo />, nodeTwo);
