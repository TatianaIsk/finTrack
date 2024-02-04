import { useState, useCallback } from "react";
import { PieChartData as data } from "./data";

import PieChartComponent from "components/ui/Chart/PieChart";
import s from "./PieChartBalance.module.scss";

const PieChartBalance = () => {
  return <PieChartComponent data={data}/>;
};

export default PieChartBalance;
