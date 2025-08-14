/*
 * Copyright 2023 OceanBase
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useContext, useState } from "react";
import { Divider, Space } from "antd";
import HelpItem from "@/layouts/SpaceContainer/Sider/HelpItem";
import MenuItem from "@/layouts/SpaceContainer/Sider/MenuItem";
import MineItem from "@/layouts/SpaceContainer/Sider/MineItem";
import SettingItem from "@/layouts/SpaceContainer/Sider/SettingItem";
import { ReactComponent as DBSvg } from "@/svgr/database_outline.svg";
import { BulbOutlined, UserOutlined } from "@ant-design/icons";

import ActivityBarContext from "../context/ActivityBarContext";
import ActivityBarButton from "./ActivityBarButton";
import styles from "@/layouts/SpaceContainer/Sider/index.less";
import Logo from "./Logo";
import { ActivityBarItemType, ActivityBarItemTypeText } from "./type";
import classNames from "classnames";

interface IProps {}

interface IItem {
  title: string;
  key: ActivityBarItemType;
  icon: React.ComponentType;
  isVisible?: boolean;
}

const ActivityBar: React.FC<IProps> = (props) => {
  const context = useContext(ActivityBarContext);
  const [collapsed, _setCollapsed] = useState(true);

  const items: IItem[] = [
    {
      title: ActivityBarItemTypeText[ActivityBarItemType.Database],
      key: ActivityBarItemType.Database,
      icon: DBSvg,
      isVisible: true,
    }
  ];

  return (
    <div className={classNames(styles.sider, {
        [styles.siderCollapsed]: collapsed,
      })}>
      <div className={styles.top}>
        <Logo />
        <Divider style={{ marginTop: 6, marginBottom: 12 }} />

        <Space size={12} direction="vertical">
          {items
            .filter((item) => item.isVisible)
            .map((item, index) => {
              return (
                <ActivityBarButton
                  key={item.key}
                  title={item.title}
                  icon={item.icon}
                  isActive={context?.activeKey === item.key}
                  onClick={async () => {
                    if (item.key === context.activeKey) {
                      context.setActiveKey(null);
                      return;
                    }
                    context?.setActiveKey(item.key);
                  }}
                />
              );
            })}
        </Space>
      </div>

      <Space size={12} direction="vertical" className={styles.bottom}>
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
    </div>
  );
};

export default ActivityBar;
