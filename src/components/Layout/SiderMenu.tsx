import SpaceSelect from "@/layouts/SpaceContainer/Sider/SpaceSelect";
import { Divider } from "antd";
import classNames from "classnames";
import { ReactNode, useState } from "react";
import styles from "@/layouts/SpaceContainer/Sider/index.less";

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
      <div
        className={classNames(styles.sider, {
          [styles.siderCollapsed]: collapsed,
        })}
      >
        {defaultDom}
        <SpaceSelect collapsed={props.collapsed} />
        <Divider style={{ margin: "0 0 14px" }} />
      </div>
    </>
  );
};
