import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as GroupSvg } from '@/svgr/group.svg';
import { DatabaseGroup } from '@/d.ts/database';

const items: MenuProps['items'] = [
  {
    key: DatabaseGroup.none,
    label: '不分组',
  },
  {
    key: DatabaseGroup.project,
    label: '按项目分组',
  },
  {
    key: DatabaseGroup.dataSource,
    label: '按数据源分组',
  },
  {
    key: DatabaseGroup.environment,
    label: '按环境分组',
  },
  {
    key: DatabaseGroup.connectType,
    label: '按类型分组',
  },
  {
    key: DatabaseGroup.cluster,
    label: '按集群分组',
  },
  {
    key: DatabaseGroup.tenant,
    label: '按租户分组',
  },
];

interface IProps {}

const Group: React.FC<IProps> = function (props) {
  
  return (
    <Dropdown
      menu={{
        items: items,
      }}
    >
      <Icon
        component={GroupSvg}
        style={{ color: 'var(--icon-color-focus)', fontSize: 14 }}
      />
    </Dropdown>
  );
};
export default Group;
