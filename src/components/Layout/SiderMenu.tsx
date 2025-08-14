import SpaceSelect from "@/layouts/SpaceContainer/Sider/SpaceSelect";
import { Divider } from "antd";
import classNames from "classnames";
import { ReactNode, useState } from "react";
import styles from "./SiderMenu.less";

interface IProps {
  props: any;
  defaultDom: ReactNode;
}

export default ({ props, defaultDom }: IProps) => {
  const [collapsed, _setCollapsed] = useState(false);
  const mentItemGap = collapsed ? 12 : 12;

  function setCollapsed(v: boolean) {
    _setCollapsed(v);
  }

  return (
    <>
      {defaultDom}
      <Divider style={{ margin: "0 0 14px" }} />
      <div>其余部分</div>
    </>
  );
};
