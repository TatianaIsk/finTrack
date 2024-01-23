import { PropsWithChildren } from "react";

import clsx from "clsx";

import s from "./MainContainer.module.scss";

interface MainContainerProps extends PropsWithChildren {
	className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ className, children, ...props }) => (
  <div className={clsx(s.container, className)} {...props}>
    {children}
  </div>
);

export default MainContainer;
