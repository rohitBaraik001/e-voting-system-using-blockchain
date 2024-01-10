import { BarChart, Tooltip, Legend, XAxis, YAxis, Bar } from "recharts";
export default function CandidatesChart(props) {

  return (
    <div>
      <BarChart width={600} height={250} data={props.data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
