import { useEffect, useState } from "react";
import { Space } from "antd";
import { BulbOutlined, UserOutlined } from "@ant-design/icons";
import HelpItem from "@/layouts/SpaceContainer/Sider/HelpItem";
import MenuItem from "@/layouts/SpaceContainer/Sider/MenuItem";
import MineItem from "@/layouts/SpaceContainer/Sider/MineItem";
import SettingItem from "@/layouts/SpaceContainer/Sider/SettingItem";
import styles from "@/layouts/SpaceContainer/Sider/index.less";

interface IProps {
  props: any;
}

export default ({ props }: IProps) => {
  const [collapsed, _setCollapsed] = useState(false);
  const mentItemGap = collapsed ? 12 : 12;

  useEffect(() => {
    _setCollapsed(props.collapsed);
  }, [props.collapsed]);

  return (
    <Space size={mentItemGap} direction="vertical" className={styles.bottom}>
      <SettingItem collapsed={collapsed} />
      <HelpItem>
        <MenuItem
          disableTip={true}
          icon={BulbOutlined}
          collapsed={collapsed}
          label={"帮助"}
        />
      </HelpItem>
      <MineItem>
        <MenuItem
          disableTip={true}
          icon={UserOutlined}
          collapsed={collapsed}
          label={"我的"}
        />
      </MineItem>
    </Space>
  );
};
