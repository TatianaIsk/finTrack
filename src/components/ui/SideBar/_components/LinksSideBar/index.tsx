import { PropsWithChildren } from "react";
import Link from "next/link";

import { SideBarLinksType } from "../SideBarContent/types";
import { proximaNova } from "assets/styles/fonts/fonts";

import Icon from "components/ui/Icon";

import clsx from "clsx";

import s from "./LinksSideBar.module.scss";

interface LinksSideBarProps extends PropsWithChildren<SideBarLinksType> {}

const LinksSideBar: React.FC<LinksSideBarProps> = ({ icon, href, children }) => {
  return (
    <div className={s.container}>
      <Icon name={icon} />
      <Link href={href} className={clsx(s.link, proximaNova.className)}>
        {children}
      </Link>
    </div>
  );
};

export default LinksSideBar;
