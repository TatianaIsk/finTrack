import Header from "components/ui/Header";
import PieChartBalance from "./_components/PieChartBalance";
import BarChartHistory from "./_components/BarChartHistory";

import s from "./IndexPageContent.module.scss";
import CategoriesBlock from "./_components/CategoriesBlock";

const IndexPageContent = () => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <Header title="Balance" />
        <PieChartBalance />
      </div>
      <div className={s.secondBlock}>
        <BarChartHistory />
      </div>
      <CategoriesBlock/>
    </div>
  );
};

export default IndexPageContent;
