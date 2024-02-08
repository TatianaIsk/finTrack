import { sanFrancisco } from "assets/styles/fonts/fonts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import clsx from "clsx";

interface BarChartComponentProps {
	data: Object[];
	className?: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({data, className}) => {
  return (
    <BarChart
      width={1060}
      height={295}
      data={data}
      margin={{
        top: 0,
        right: 30,
        left: 20,
        bottom: -20,
      }}
      className={clsx(sanFrancisco.className, className)}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="var(--main-color-brown)" />
      <YAxis yAxisId="right" orientation="right" stroke="var(--main-color-brown)" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="income" fill="var(--dark-color-pink)" />
      <Bar yAxisId="right" dataKey="expenses" fill="var(--main-color-brown)" />
    </BarChart>
  );
};

export default BarChartComponent;
