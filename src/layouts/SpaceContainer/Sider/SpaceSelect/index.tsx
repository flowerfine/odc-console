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

import { useState } from 'react';
import { Select, Space } from 'antd';
import Icon, { CheckOutlined, SwapOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { ReactComponent as PersonalSvg } from '@/svgr/personal_space.svg';
import { ReactComponent as GroupSvg } from '@/svgr/project_space.svg';
import styles from './index.less';

interface ISpaceSelect {
  collapsed: boolean;
}

const SpaceSelect: React.FC<ISpaceSelect> = (props) => {
  const { collapsed } = props;
  const [selectdValue, setSelectdValue] = useState('private')

  return (
    <Select
      className={classNames(styles['space-switch'], {
        [styles.collapsed]: collapsed,
      })}
      value={selectdValue}
      suffixIcon={<SwapOutlined />}
      popupMatchSelectWidth={120}
      style={{ width: collapsed ? 30 : 120 }}
      variant="borderless"
      menuItemSelectedIcon={<CheckOutlined />}
      onChange={(value) => setSelectdValue(value)}
      options={[
        {
          value: 'private',
          label: (
            <Space>
              <div className={styles.private}>
                <Icon component={PersonalSvg} />
              </div>
              <span>个人空间</span>
            </Space>
          ),
        },
        {
          value: 'group',
          label: (
            <Space>
              <div className={styles.synergy}>
                <Icon component={GroupSvg} />
              </div>
              <span>团队空间</span>
            </Space>
          ),
        },
      ]}
    />
  );
};

export default SpaceSelect;
