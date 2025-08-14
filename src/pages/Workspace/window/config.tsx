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

import Icon from '@ant-design/icons';
import { PageType } from '@/constants';
import withConfirmModal from './factory';
import SQLPage from '../page/SqlPage';
// @ts-ignore
import { ReactComponent as ConsoleSQLSvg } from '@/svgr/Console-SQL.svg';

/** 页面类型 */
export const pageMap = {
  // SQL 查询页
  [PageType.SQL]: {
    component: withConfirmModal(SQLPage),
    icon: <Icon component={ConsoleSQLSvg} />,
    color: 'var(--icon-color-1)',
    params: {
      scriptType: PageType.SQL,
    },
  },
};
