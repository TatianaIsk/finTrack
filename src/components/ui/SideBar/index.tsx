import Image from "next/image";

import logo from "./../../../assets/images/logo/logo.svg";

import s from "./SideBar.module.scss";
import clsx from "clsx";
import { proximaNova } from "assets/styles/fonts/fonts";
import SideBarContent from "./_components/SideBarContent";

const SideBar = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image src={logo} alt="logo" />
        <p className={clsx(s.textLogo, proximaNova.className)}>findFinanse</p>
      </div>
      <SideBarContent/>
    </div>
  );
};

export default SideBar;
