import clsx from "clsx";

import s from "./Icon.module.scss";

export type IconsVariants = "balance" | "grafics" | "history" | "goals" | "settings" | "fandq";

interface IconProps {
  name: IconsVariants;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => <div className={clsx(s.icon, s[name], className)}></div>;

export default Icon;