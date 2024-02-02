import SideBar from "components/ui/SideBar";
import IndexPageContent from "./_components/IndexPageContent";

import s from "./IndexPageComponents.module.scss";

const IndexPageComponent = () => {
  return (
    <div className={s.container}>
      <SideBar />
      <IndexPageContent />
    </div>
  );
};

export default IndexPageComponent;
