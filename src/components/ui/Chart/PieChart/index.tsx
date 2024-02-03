import { Pie, PieChart, ResponsiveContainer } from "recharts";

interface PieChartComponentProps {
  activeIndex: number;
  data: Object[];
  onPieEnter: (value: number) => void;
  color: string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ activeIndex, data, onPieEnter, color }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill={color}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
