import Link from "next/link";

import { SideBarLinks as data } from "./data";

import s from "./SideBarContent.module.scss";

const SideBarContent = () => {
  return (
    <div className={s.container}>
      {data.map((item) => (
        <Link href={item.href}>{item.title}</Link>
      ))}
    </div>
  );
};

export default SideBarContent;
