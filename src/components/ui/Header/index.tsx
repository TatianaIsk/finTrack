import Image from "next/image";

import bell from "assets/images/icons/header/bell.png";
import user from "assets/images/icons/header/user.png";
import { sanFrancisco } from "assets/styles/fonts/fonts";

import clsx from "clsx";

import s from "./Header.module.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={s.container}>
      <h3 className={clsx(s.title, sanFrancisco.className)}>{title}</h3>
      <div className={s.icons}>
        <Image src={bell} alt="" className={s.icon}/>
        <Image src={user} alt="" className={s.icon}/>
      </div>
    </header>
  );
};

export default Header;
