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

import React from 'react';
import { Menu, Tooltip } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import DropMenu from '../DropMenu';
import styles from './index.less';

interface IProps {}

const MineItem: React.FC<IProps> = function ({ children }) {
  const RoleNames = '管理员';
  const userName = 'admin';

  function getMenu() {
    let menu: ItemType[] = [];
    menu = menu.concat([
      {
        key: 'username',
        label: (
          <Tooltip placement="right" title={userName}>
            <span className={styles.userName}>{userName}</span>
          </Tooltip>
        ),
      },
      {
        key: 'user-role',
        label: (
          <Tooltip placement="right" title={RoleNames}>
            <span className={styles.userRoles}>角色：{RoleNames}</span>
          </Tooltip>
        ),
      },
      {
        type: 'divider',
      },
      {
        key: 'record',
        label: '操作记录',
      },
      {
        type: 'divider',
      },
    ]);
    return menu;
  }

  return (
    <>
      <DropMenu
        menu={<Menu selectedKeys={null} key="user" className={styles.userMenu} items={getMenu()} />}
      >
        {children}
      </DropMenu>
    </>
  );
};

export default MineItem;
