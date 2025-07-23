import './TypeBarGraph.css'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'micro',
    "Number of Breweries": 4311,
  },
  {
    name: 'brewpub',
    "Number of Breweries": 2524,
  },
  {
    name: 'planning',
    "Number of Breweries": 674,
  },
  {
    name: 'closed',
    "Number of Breweries": 246,
  },
  {
    name: 'regional',
    "Number of Breweries": 228,
  },
];

export default class Example extends PureComponent {


  render() {
    return (
      <div className="type-bar-graph-container">
        <h2 className="chart-title">Top 5 Types by Number of Breweries</h2>
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
          <Bar dataKey="Number of Breweries" fill="#C8A2C8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </div>
    );
  }
}
