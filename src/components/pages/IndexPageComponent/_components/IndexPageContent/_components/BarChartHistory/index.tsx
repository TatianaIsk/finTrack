import BarChartComponent from "components/ui/Chart/BarChart";

import { BarChartData as data } from "./data";

import s from './BarChartHistory.module.scss'

const BarChartHistory = () => {
  return (
    <div className={s.container}>
      <BarChartComponent data={data} className={s.chart}/>
    </div>
  );
};

export default BarChartHistory;
