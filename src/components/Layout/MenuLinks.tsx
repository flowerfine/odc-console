import HelpItem from "@/layouts/SpaceContainer/Sider/HelpItem";
import MenuItem from "@/layouts/SpaceContainer/Sider/MenuItem";
import MineItem from "@/layouts/SpaceContainer/Sider/MineItem";
import SettingItem from "@/layouts/SpaceContainer/Sider/SettingItem";
import { BulbOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

interface IProps {}

export default ({}: IProps) => {
  const [collapsed, _setCollapsed] = useState(false);
  const mentItemGap = collapsed ? 12 : 12;

  return [
    <SettingItem collapsed={collapsed} />,
    <HelpItem>
      <MenuItem
        disableTip={true}
        icon={BulbOutlined}
        collapsed={collapsed}
        label={"帮助"}
      />
    </HelpItem>,
    <MineItem>
      <MenuItem
        disableTip={true}
        icon={UserOutlined}
        collapsed={collapsed}
        label={"我的"}
      />
    </MineItem>,
  ];
};
