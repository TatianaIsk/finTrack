import LinksSideBar from "../LinksSideBar";

import { proximaNova } from "assets/styles/fonts/fonts";

import clsx from "clsx";

import s from "./SideBarContent.module.scss";

const SideBarContent = () => {
  return (
    <div className={s.container}>
      <p className={clsx(s.subtitle, proximaNova.className)}>basic</p>
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
      <p className={clsx(s.subtitle, proximaNova.className)}>additional</p>
      <LinksSideBar icon="settings" href="/">
        Settings
      </LinksSideBar>
      <LinksSideBar icon="fandq" href="/">
        F&Q
      </LinksSideBar>
    </div>
  );
};

export default SideBarContent;
