import Image from "next/image";
import LinksSideBar from "../LinksSideBar";

import community from "assets/images/icons/sidebar/community.png";
import { proximaNova } from "assets/styles/fonts/fonts";

import clsx from "clsx";

import s from "./SideBarContent.module.scss";
import Button from "components/ui/Button";

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
      <div className={s.communityBlock}>
        <Image src={community} alt="" className={s.img} />
        <Button className={s.btn}>Our community</Button>
      </div>
    </div>
  );
};

export default SideBarContent;
