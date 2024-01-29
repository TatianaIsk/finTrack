import Image from "next/image";

import { proximaNova } from "assets/styles/fonts/fonts";
import SideBarContent from "./_components/SideBarContent";
import logo from "./../../../assets/images/logo/logo.svg";

import clsx from "clsx";

import s from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image src={logo} alt="logo" className={s.image}/>
        <p className={clsx(s.textLogo, proximaNova.className)}>findFinanse</p>
      </div>
      <SideBarContent/>
    </div>
  );
};

export default SideBar;
