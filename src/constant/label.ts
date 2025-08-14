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

import {
  ConnectType,
  DbObjectType,
  DragInsertType,
  SchemaComparingResult,
  SQLLintMode,
  SQLSessionMode,
  DatasourceGroup,
  RefreshMethod,
  RefreshScheduleUnit,
} from '@/d.ts';
import { DBType, BooleanOptionType } from '@/d.ts/database';
import { ColumnStoreType } from '@/d.ts/table';

export const DbObjectTypeTextMap = (type: DbObjectType) => {
  const textMap = {
    [DbObjectType.database]: '数据库',
    [DbObjectType.table]: '表',
    [DbObjectType.view]: '视图',
    [DbObjectType.procedure]: '存储过程',
    [DbObjectType.function]: '函数',
    [DbObjectType.sequence]: '序列',
    [DbObjectType.package]: '程序包',
    [DbObjectType.package_body]: '程序包体',

    [DbObjectType.column]: '列',

    //程序包体
    [DbObjectType.trigger]: '触发器',
    [DbObjectType.synonym]: '同义词',
    [DbObjectType.public_synonym]: '公共同义词',

    // 公共同义词
    [DbObjectType.table_group]: '表组',
    [DbObjectType.file]: '文件',
    [DbObjectType.type]: '类型',
    [DbObjectType.external_table]: '外表',
    [DbObjectType.materialized_view]: '物化视图',
  };
  return textMap?.[type];
};

export const ConnectTypeText = (type: ConnectType) => {
  const textMap = {
    [ConnectType.NONE]: '全部模式',

    [ConnectType.OB_MYSQL]: 'OceanBase MySQL',
    [ConnectType.OB_ORACLE]: 'OceanBase Oracle',
    [ConnectType.CLOUD_OB_MYSQL]: 'OB Cloud MySQL',
    [ConnectType.CLOUD_OB_ORACLE]: 'OB Cloud Oracle',
    [ConnectType.ODP_SHARDING_OB_MYSQL]: 'OB Sharding MySQL',
    [ConnectType.MYSQL]: 'MySQL',
    [ConnectType.DORIS]: 'Doris',
    [ConnectType.ORACLE]: 'Oracle',
    [ConnectType.PG]: 'PostgreSQL',
    [ConnectType.OSS]: '阿里云 OSS',
    [ConnectType.COS]: '腾讯云 COS',
    [ConnectType.OBS]: '华为云 OBS',
    [ConnectType.S3A]: 'AWS S3',
  };
  return textMap?.[type];
};

export const GruopTypeText = {
  [DatasourceGroup.OceanBaseDatabase]: 'OceanBase 数据库',
  [DatasourceGroup.OtherDatabase]: '其他数据库',
  [DatasourceGroup.FileSystem]: '对象存储',
};

export const DBTypeText = {
  [DBType.LOGICAL]: '逻辑库',
  [DBType.PHYSICAL]: '物理库',
};

export const DatabaseAvailableTypeText = {
  [BooleanOptionType.TRUE]: '可用',
  [BooleanOptionType.FALSE]: '不可用',
};

export const DatabaseBelongsToProjectTypeText = {
  [BooleanOptionType.TRUE]: '已分配项目',
  [BooleanOptionType.FALSE]: '未分配项目',
};

export const DragInsertTypeText = function () {
  return {
    [DragInsertType.NAME]: '对象名',
    [DragInsertType.SELECT]: 'Select 语句',
    [DragInsertType.INSERT]: 'Insert 语句',
    [DragInsertType.UPDATE]: 'Update 语句',
    [DragInsertType.DELETE]: 'Delete 语句',
  };
};

export const SQLLintModeText = {
  [SQLLintMode.AUTO]: '自动',
  [SQLLintMode.MANUAL]: '手动',
};

export const SchemaComparingResultText = function () {
  return {
    [SchemaComparingResult.CREATE]: '新建',
    [SchemaComparingResult.UPDATE]: '修改',
    [SchemaComparingResult.NO_ACTION]: '一致',
    [SchemaComparingResult.WAITING]: '待分析',
    [SchemaComparingResult.COMPARING]: '分析中',
    [SchemaComparingResult.SKIP]: '跳过',
  };
};

export const SQLSessionModeText = {
  [SQLSessionMode.MultiSession]: '独立 Session',
  [SQLSessionMode.SingleSession]: '共享 Session',
};
export const columnGroupsText = {
  [ColumnStoreType.COLUMN]: '列存',
  [ColumnStoreType.ROW]: '行存',
};

export const refreshMethodText = {
  [RefreshMethod.REFRESH_FAST]: '快速刷新',
  [RefreshMethod.REFRESH_FORCE]: '强制刷新',
  [RefreshMethod.REFRESH_COMPLETE]: '完全刷新',
  [RefreshMethod.NEVER_REFRESH]: '不需要刷新',
};

export const refreshScheduleUnitText = {
  [RefreshScheduleUnit.SECOND]: '秒',
  [RefreshScheduleUnit.MINUTE]: '分',
  [RefreshScheduleUnit.HOUR]: '时',
  [RefreshScheduleUnit.DAY]: '天',
  [RefreshScheduleUnit.WEEK]: '周',
  [RefreshScheduleUnit.MONTH]: '月',
  [RefreshScheduleUnit.YEAR]: '年',
};
