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
import { Menu } from 'antd';
import DropMenu from '../DropMenu';

interface IProps {}

const HelpItem: React.FC<IProps> = function ({ children }) {
  const HELP_MENUS = [
    {
      title: '帮助文档',
      key: 'pdf',
      action() {},
    },
    {
      title: '关于开发者中心',
      key: 'about',
      action() {},
    },
    {
      title: '意见反馈',
      key: 'feedback',
      action() {},
    },
  ].filter(Boolean);

  const getHelpMenus = () => {
    return (
      <Menu
        selectedKeys={null}
        items={HELP_MENUS.map((item) => ({
          key: item.key,
          onClick: item.action,
          label: item.title,
        }))}
      />
    );
  };

  return (
    <>
      <DropMenu
        menu={getHelpMenus()}
      >
        {children}
      </DropMenu>
    </>
  );
};

export default HelpItem;
