import MenuItem from "@/layouts/SpaceContainer/Sider/MenuItem";
import { HomeOutlined } from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-components";
import { Link, useLocation } from "@umijs/max";
import styles from "./MenuItem.less";
import classNames from "classnames";

interface IProps {
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  };
  dom: React.ReactNode;
  menuProps: any;
}

export default ({ item, dom, menuProps }: IProps) => {
  const location = useLocation();
  const selectedPath = location?.pathname?.split("/")[1];
  const path = item.path?.split("/")[1] || "";

  return (
    <>
      {/* <div
        className={classNames(styles.item, {
          [styles.selected]: selectedPath === path,
        })}
      >
        {dom}
      </div> */}
      {dom}
    </>
  );
};
