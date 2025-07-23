import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import './StateBarGraph.css'
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 400, pv: 2400, amt: 2400}];


function StateBarGraph() {
    const MyChart = () => (
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="My data series name" />
        <XAxis dataKey="name" />
        <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
        <Legend align="right" />
      </LineChart>
    );
    
    return (
        <div className="state-bar-graph-container">
            <MyChart />
        </div>
    )
}

export default StateBarGraph