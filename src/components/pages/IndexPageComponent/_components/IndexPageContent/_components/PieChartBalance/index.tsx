import { useState, useCallback } from "react";
import { PieChartData as data } from "./data";

import s from "./PieChartBalance.module.scss";
import PieChartComponent from "components/ui/Chart/PieChart";

const PieChartBalance = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChartComponent
      activeIndex={activeIndex}
      data={data}
      onPieEnter={onPieEnter}
      color={"var(--background-color-pink)"}
    />
  );
};

export default PieChartBalance;
