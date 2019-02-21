import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

export default class PieChartDemo extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={1.8}>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
