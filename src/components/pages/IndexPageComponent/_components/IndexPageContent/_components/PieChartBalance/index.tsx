import { PieChartData as data } from "./data";

import PieChartComponent from "components/ui/Chart/PieChart";
import { sanFrancisco, proximaNova } from "assets/styles/fonts/fonts";

import clsx from "clsx";

import s from "./PieChartBalance.module.scss";

const PieChartBalance = () => {
  return (
    <div className={s.container}>
      <h2 className={clsx(sanFrancisco.className, s.title)}>Balance statistics</h2>
      <PieChartComponent data={data}/>
      <p className={clsx(proximaNova.className, s.subtitle)}>income and expenses</p>
    </div>
  );
};

export default PieChartBalance;
