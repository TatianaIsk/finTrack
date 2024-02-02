import Header from "components/ui/Header";
import s from "./IndexPageContent.module.scss";

const IndexPageContent = () => {
  return (
    <div className={s.container}>
      <Header title="Balance" />
    </div>
  );
};

export default IndexPageContent;
