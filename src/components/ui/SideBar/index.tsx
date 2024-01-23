import Image from "next/image";

import logo from "./../../../assets/images/logo/logo.svg";

import s from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={s.container}>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default SideBar;
