---
template: Article
title: Charts in figures
description: A short demo of an article featuring charts made with recharts
js: 01-charts-in-figures.jsx
---

This is an example article showing how to include interactive charts using the [recharts](http://recharts.org/en-US) library.

<figure>
<figcaption>Fig. 1. Simple Line Chart</figcaption>
<div id="line-chart-demo"></div>
</figure>

Each figure can be self-contained because each element can have its own call to `ReactDOM.render`. In other words, this doesn't need to be a "single page application" where there is one root element and every child is rendered by React. I prefer thinking of these as "single div applications."

<figure>
<figcaption>Fig. 2. Simple Pie Chart</figcaption>
<div id="pie-chart-demo"></div>
</figure>
