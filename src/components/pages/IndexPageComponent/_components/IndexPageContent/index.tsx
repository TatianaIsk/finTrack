import Header from "components/ui/Header";
import s from "./IndexPageContent.module.scss";
import PieChartBalance from "./_components/PieChartBalance";

const IndexPageContent = () => {
  return (
    <div className={s.container}>
      <Header title="Balance" />
      <PieChartBalance />
    </div>
  );
};

export default IndexPageContent;
