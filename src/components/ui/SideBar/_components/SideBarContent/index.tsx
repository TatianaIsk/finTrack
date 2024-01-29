import LinksSideBar from "../LinksSideBar";

import s from "./SideBarContent.module.scss";

const SideBarContent = () => {
  return (
    <div className={s.container}>
      <LinksSideBar icon="balance" href="/">
        Balance
      </LinksSideBar>
      <LinksSideBar icon="grafics" href="/">
        Graphics
      </LinksSideBar>
      <LinksSideBar icon="history" href="/">
        Purchase history
      </LinksSideBar>
      <LinksSideBar icon="goals" href="/">
        Goals
      </LinksSideBar>
    </div>
  );
};

export default SideBarContent;
