import './StateBarGraph.css'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'California',
    "Number of Breweries": 918,
  },
  {
    name: 'Washington',
    "Number of Breweries": 486,
  },
  {
    name: 'Colorado',
    "Number of Breweries": 448,
  },
  {
    name: 'New York',
    "Number of Breweries": 419,
  },
  {
    name: 'Michigan',
    "Number of Breweries": 375,
  },
];

export default class Example extends PureComponent {


  render() {
    return (
      <div className="state-bar-graph-container">
        <h2 className="chart-title">Top 5 States by Number of Breweries</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Number of Breweries" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </div>
    );
  }
}
