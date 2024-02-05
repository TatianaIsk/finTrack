import { sanFrancisco } from "assets/styles/fonts/fonts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "January",
    deposits: 4000,
    expenses: 2400,
  },
  {
    name: "February",
    deposits: 3000,
    expenses: 1398,
  },
  {
    name: "March",
    deposits: 9800,
    expenses: 2000,
  },
  {
    name: "April",
    deposits: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    deposits: 4800,
    expenses: 1890,
  },
  {
    name: "June",
    deposits: 2390,
    expenses: 3800,
  },
  {
    name: "July",
    deposits: 3490,
    expenses: 4300,
  },
];

const BarChartComponent = () => {
  return (
    <BarChart
      width={1060}
      height={300}
      data={data}
      margin={{
        top: -20,
        right: 30,
        left: 20,
        bottom: -15,
      }}
      className={sanFrancisco.className}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="var(--main-color-brown)" />
      <YAxis yAxisId="right" orientation="right" stroke="var(--main-color-brown)" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="deposits" fill="var(--dark-color-pink)" />
      <Bar yAxisId="right" dataKey="expenses" fill="var(--main-color-brown)" />
    </BarChart>
  );
};

export default BarChartComponent;
