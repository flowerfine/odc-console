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

import React, { useState } from "react";
import { Badge, Divider, message, Space } from "antd";
import Icon, {
  AppstoreOutlined,
  BulbOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CodeOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, history, useLocation } from "@umijs/max";
import classNames from "classnames";
import { ReactComponent as NewOpenSvg } from "@/svgr/newopen.svg";
import { IPageType } from "@/d.ts/_index";
import Logo from "./Logo";
import HelpItem from "./HelpItem";
import MenuItem from "./MenuItem";
import MineItem from "./MineItem";
import SettingItem from "./SettingItem";
import SpaceSelect from "./SpaceSelect";
import styles from "./index.less";

interface IProps {}

const Sider: React.FC<IProps> = function (props) {
  const location = useLocation();
  const selected = location?.pathname?.split("/")[1];
  const [collapsed, _setCollapsed] = useState(false);
  const mentItemGap = collapsed ? 12 : 12;

  function setCollapsed(v: boolean) {
    _setCollapsed(v);
  }

  return (
    <div
      className={classNames(styles.sider, {
        [styles.siderCollapsed]: collapsed,
      })}
    >
      <div>
        <Logo collapsed={collapsed} />
        <SpaceSelect collapsed={collapsed} />
        <Divider style={{ margin: "0 0 14px" }} />

        <Space
          size={mentItemGap}
          direction="vertical"
          style={{ width: "100%" }}
        >
          <Link to={`/${IPageType.Console}`}>
            <MenuItem
              key={IPageType.Console}
              selected={selected === IPageType.Console}
              icon={HomeOutlined}
              collapsed={collapsed}
              label={"工作台"}
            />
          </Link>
          <Link to={`/${IPageType.Project}`}>
            <MenuItem
              key={IPageType.Project}
              selected={selected === IPageType.Project}
              icon={AppstoreOutlined}
              collapsed={collapsed}
              label={'项目'}
            />
          </Link>
        </Space>
        <Divider style={{ margin: "6px 0" }} />
        <MenuItem
          onClick={() => {
            history.push("/workbench");
          }}
          key={"newsqlworkbench"}
          selected={false}
          icon={CodeOutlined}
          collapsed={collapsed}
          label={
            <span>
              SQL 控制台
              <Icon
                style={{ marginLeft: 8, color: "var(--text-color-hint)" }}
                component={NewOpenSvg}
              />
            </span>
          }
        />
      </div>

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

      <div
        className={styles.collapsedBtn}
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon component={collapsed ? CaretRightOutlined : CaretLeftOutlined} />
      </div>
    </div>
  );
};

export default Sider;
