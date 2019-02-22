import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#b197fc', '#66d9e8', '#91a7ff', '#ffc078'];


export default class PieChartDemo extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={1.7}>
        <PieChart>
          <Legend />
          <Pie dataKey="value" data={data} fill="#dee2e6" label>
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
