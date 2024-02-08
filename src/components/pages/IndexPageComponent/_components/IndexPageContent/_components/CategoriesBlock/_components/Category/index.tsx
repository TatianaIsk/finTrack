import { PropsWithChildren } from "react";

import Icon, { IconsVariants } from "components/ui/Icon";

import clsx from "clsx";

import s from "./Category.module.scss";
import Button from "components/ui/Button";

interface CategoryProps extends PropsWithChildren {
  className?: string;
  icon: IconsVariants;
}

const Category: React.FC<CategoryProps> = ({ children, className, icon }) => {
  return (
    <div className={clsx(s.container, className)}>
      <div>
        <Icon name={icon} />
      </div>
      <div className={s.info}>
        {children}
        <Button></Button>
      </div>
    </div>
  );
};

export default Category;
