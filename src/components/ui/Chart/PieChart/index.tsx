import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

import { sanFrancisco } from "assets/styles/fonts/fonts";

interface PieChartProps {
  data: Object[];
  className?: string;
}

const balance = 765;

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        className={sanFrancisco.className}
        x={cx}
        y={cy}
        dy={8}
        fontSize={22}
        textAnchor="middle"
        fill={"var(--main-color-brown)"}
      >
        {"Balance "}
        {balance + "$"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        className={sanFrancisco.className}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="var(--main-color-black)"
      >
        {payload.name}
      </text>
      <text
        className={sanFrancisco.className}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={22}
        fontSize={20}
        textAnchor={textAnchor}
        fill="#333"
      >
        {payload.value + "$"}
      </text>
    </g>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({ data, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: string, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={505} height={300}>
      <Pie
        className={className}
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        innerRadius={90}
        outerRadius={110}
        fill="var(--background-color-pink)"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

export default PieChartComponent;
