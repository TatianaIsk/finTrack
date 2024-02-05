import Header from "components/ui/Header";
import s from "./IndexPageContent.module.scss";
import PieChartBalance from "./_components/PieChartBalance";
import BarChartHistory from "./_components/BarChartHistory";

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
    </div>
  );
};

export default IndexPageContent;
