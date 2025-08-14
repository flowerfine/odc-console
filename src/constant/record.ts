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

import { AuditEventActionType, AuditEventType, IAuditEvent } from '@/d.ts';

export interface IUserMap {
  [key: string]: {
    name: string;
    accountName: string;
    roleNames?: string[];
  };
}
export const AuditEventMetaMap = {
  [AuditEventType.PERSONAL_CONFIGURATION]: '个人设置',
  //个人设置
  [AuditEventType.MEMBER_MANAGEMENT]: '成员管理',
  //成员管理
  [AuditEventType.PASSWORD_MANAGEMENT]: '密码管理',
  //密码管理
  [AuditEventType.CONNECTION_MANAGEMENT]: '连接管理',
  //连接管理
  [AuditEventType.SCRIPT_MANAGEMENT]: '脚本管理',
  //脚本管理
  [AuditEventType.DATABASE_OPERATION]: '数据库操作',
  //数据库操作
  [AuditEventType.ORGANIZATION_CONFIGURATION]: '组织配置',
  //组织配置
  [AuditEventType.RESOURCE_GROUP_MANAGEMENT]: '资源组管理',
  //资源组管理
  [AuditEventType.ASYNC]: '数据库变更',
  //数据库变更
  [AuditEventType.IMPORT]: '导入',
  //导入
  [AuditEventType.EXPORT]: '导出',
  //导出
  [AuditEventType.MOCKDATA]: '模拟数据',
  //模拟数据
  [AuditEventType.AUDIT_EVENT]: '操作记录',
  [AuditEventType.SHADOWTABLE_SYNC]: '影子表同步',
  //影子表同步
  [AuditEventType.STRUCTURE_COMPARISON]: '结构比对', //'结构比对'
  [AuditEventType.PARTITION_PLAN]: '分区计划',
  //分区计划 //操作记录
  [AuditEventType.FLOW_CONFIG]: '任务流程',
  //任务流程
  [AuditEventType.DATA_MASKING_RULE]: '脱敏规则',
  //脱敏规则
  [AuditEventType.DATA_MASKING_POLICY]: '脱敏策略',
  //脱敏策略
  [AuditEventType.ALTER_SCHEDULE]: '计划变更',
  //计划变更

  // 数据库管理
  [AuditEventType.DATABASE_MANAGEMENT]: '数据库管理',
  //数据库管理
  // 权限申请
  [AuditEventType.PERMISSION_APPLY]: '权限申请',
  //权限申请
  // 数据源管理
  [AuditEventType.DATASOURCE_MANAGEMENT]: '数据源管理',
  //数据源管理
  // 项目管理
  [AuditEventType.PROJECT_MANAGEMENT]: '项目管理',
  //项目管理
  // 审计事件
  [AuditEventType.EXPORT_RESULT_SET]: '导出结果集',
  //'导出结果集'
  // 申请项目权限
  [AuditEventActionType.APPLY_PROJECT_PERMISSION]: '申请项目权限', //'申请项目权限'
  // SQL安全规则管理
  [AuditEventType.SQL_SECURITY_RULE_MANAGEMENT]: 'SQL 安全规则管理', //'SQL安全规则管理'
  [AuditEventActionType.APPLY_DATABASE_PERMISSION]: '申请库权限', //'申请库权限'
  [AuditEventActionType.DATABASE_PERMISSION_MANAGEMENT]: '库权限管理', //'库权限管理'
  [AuditEventActionType.APPLY_TABLE_PERMISSION]: '申请表/视图权限',
  [AuditEventActionType.TABLE_PERMISSION_MANAGEMENT]: '表/视图权限管理',
  [AuditEventType.AUTOMATION_RULE_MANAGEMENT]: '自动授权规则管理', //'自动授权规则管理'
  [AuditEventType.NOTIFICATION_MANAGEMENT]: '消息推送管理',
  [AuditEventType.SENSITIVE_COLUMN_MANAGEMENT]: '敏感列管理',
  [AuditEventType.MULTIPLE_ASYNC]: '多库变更',
  [AuditEventType.DATABASE_CHANGE_CHANGING_ORDER_TEMPLATE_MANAGEMENT]: '数据库变更顺序模板管理',
}
export const AuditEventActionMap = {
  // 个人配置
  [AuditEventActionType.UPDATE_PERSONAL_CONFIGURATION]: '修改',
  // 密码管理
  // 修改密码
  [AuditEventActionType.CHANGE_PASSWORD]:'修改密码',
  // 重置密码
  [AuditEventActionType.RESET_PASSWORD]: '重置密码',
  //重置密码
  // 设置密码
  [AuditEventActionType.SET_PASSWORD]: '设置密码',
  // 连接管理
  [AuditEventActionType.CREATE_CONNECTION]: '新建连接',
  //新建连接
  [AuditEventActionType.DELETE_CONNECTION]: '删除连接',
  //删除连接
  [AuditEventActionType.UPDATE_CONNECTION]: '修改连接',
  //修改连接
  [AuditEventActionType.USE_CONNECTION]: '创建会话',
  //创建会话
  [AuditEventActionType.QUIT_CONNECTION]: '关闭会话',
  //关闭会话
  [AuditEventActionType.ENABLE_CONNECTION]: '启用',
  //启用
  [AuditEventActionType.DISABLE_CONNECTION]: '停用',
  //停用 // 脚本管理
  [AuditEventActionType.CREATE_SCRIPT]: '新建',
  //新建
  [AuditEventActionType.UPDATE_SCRIPT]: '修改',
  //修改
  [AuditEventActionType.DELETE_SCRIPT]: '删除',
  //删除
  [AuditEventActionType.DOWNLOAD_SCRIPT]: '下载',
  //下载
  [AuditEventActionType.UPLOAD_SCRIPT]: '上传',
  //上传 // 组织配置
  [AuditEventActionType.UPDATE_ORGANIZATION_CONFIGURATION]: '修改',
  //修改 // 成员管理
  [AuditEventActionType.ADD_USER]: '新增用户',
  //新增用户
  [AuditEventActionType.UPDATE_USER]: '修改用户',
  //修改用户
  [AuditEventActionType.DELETE_USER]: '删除用户',
  //删除用户
  [AuditEventActionType.ADD_ROLE]: '新增角色',
  //新增角色
  [AuditEventActionType.UPDATE_ROLE]: '修改角色',
  //修改角色
  [AuditEventActionType.DELETE_ROLE]: '删除角色',
  //删除角色
  [AuditEventActionType.ENABLE_USER]: '启用用户',
  //启用用户
  [AuditEventActionType.DISABLE_USER]: '停用用户',
  //停用用户
  [AuditEventActionType.ENABLE_ROLE]: '启用角色',
  //启用角色
  [AuditEventActionType.DISABLE_ROLE]: '停用角色',
  //停用角色 // 资源组管理
  [AuditEventActionType.ADD_RESOURCE_GROUP]: '新增资源组',
  //新增资源组
  [AuditEventActionType.UPDATE_RESOURCE_GROUP]: '修改资源组',
  //修改资源组
  [AuditEventActionType.DELETE_RESOURCE_GROUP]: '删除资源组',
  //删除资源组
  [AuditEventActionType.ENABLE_RESOURCE_GROUP]: '启用资源组',
  //启用资源组
  [AuditEventActionType.DISABLE_RESOURCE_GROUP]: '停用资源组',
  //停用资源组 // 数据库操作
  [AuditEventActionType.SELECT]: 'SELECT',
  [AuditEventActionType.DELETE]: 'DELETE',
  [AuditEventActionType.INSERT]: 'INSERT',
  [AuditEventActionType.REPLACE]: 'REPLACE',
  [AuditEventActionType.UPDATE]: 'UPDATE',
  [AuditEventActionType.SET]: 'SET',
  [AuditEventActionType.DROP]: 'DROP',
  [AuditEventActionType.ALTER]: 'ALTER',
  [AuditEventActionType.TRUNCATE]: 'TRUNCATE',
  [AuditEventActionType.CREATE]: 'CREATE',
  [AuditEventActionType.OTHERS]: 'OTHERS',
  // 任务流程
  [AuditEventActionType.CREATE_ASYNC_TASK]: '新建',
  //新建
  [AuditEventActionType.CREATE_MOCKDATA_TASK]: '新建',
  //新建
  [AuditEventActionType.CREATE_IMPORT_TASK]: '新建',
  //新建
  [AuditEventActionType.CREATE_EXPORT_TASK]: '新建',
  //新建
  [AuditEventActionType.APPROVE_ASYNC_TASK]: '通过',
  //通过
  [AuditEventActionType.APPROVE_MOCKDATA_TASK]: '通过',
  //通过
  [AuditEventActionType.APPROVE_IMPORT_TASK]: '通过',
  //通过
  [AuditEventActionType.APPROVE_EXPORT_TASK]: '通过',
  //通过
  [AuditEventActionType.REJECT_ASYNC_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.REJECT_MOCKDATA_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.REJECT_IMPORT_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.REJECT_EXPORT_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.EXECUTE_ASYNC_TASK]: '执行',
  //执行
  [AuditEventActionType.EXECUTE_MOCKDATA_TASK]: '执行',
  //执行
  [AuditEventActionType.EXECUTE_IMPORT_TASK]: '执行',
  //执行
  [AuditEventActionType.EXECUTE_EXPORT_TASK]: '执行',
  //执行
  [AuditEventActionType.STOP_ASYNC_TASK]: '终止',
  //终止
  [AuditEventActionType.STOP_MOCKDATA_TASK]: '终止',
  //终止
  [AuditEventActionType.STOP_IMPORT_TASK]: '终止',
  //终止
  [AuditEventActionType.STOP_EXPORT_TASK]: '终止',
  //终止
  [AuditEventActionType.ROLLBACK_TASK]: '回滚',
  //拒绝 //回滚 // 操作记录
  [AuditEventActionType.EXPORT_AUDIT_EVENT]: '导出操作记录',
  //导出操作记录 // 流程管理
  [AuditEventActionType.CREATE_FLOW_CONFIG]: '新建流程',
  //新建流程
  [AuditEventActionType.UPDATE_FLOW_CONFIG]: '修改流程',
  //修改流程
  [AuditEventActionType.ENABLE_FLOW_CONFIG]: '启用流程',
  //启用流程
  [AuditEventActionType.DISABLE_FLOW_CONFIG]: '停用流程',
  //停用流程
  [AuditEventActionType.DELETE_FLOW_CONFIG]: '删除流程',
  //删除流程
  [AuditEventActionType.BATCH_DELETE_FLOW_CONFIG]: '批量删除',
  //批量删除
  [AuditEventActionType.CREATE_DATA_MASKING_RULE]: '新建',
  //新建
  [AuditEventActionType.UPDATE_DATA_MASKING_RULE]: '修改',
  //修改
  [AuditEventActionType.ENABLE_DATA_MASKING_RULE]: '启用',
  //启用
  [AuditEventActionType.DISABLE_DATA_MASKING_RULE]: '停用',
  //停用
  [AuditEventActionType.DELETE_DATA_MASKING_RULE]: '删除',
  //删除
  [AuditEventActionType.CREATE_DATA_MASKING_POLICY]: '新建',
  //新建
  [AuditEventActionType.UPDATE_DATA_MASKING_POLICY]: '修改',
  //修改
  [AuditEventActionType.DELETE_DATA_MASKING_POLICY]: '删除',
  //删除

  [AuditEventActionType.CREATE_SHADOWTABLE_SYNC_TASK]: '新建',
  //新建
  [AuditEventActionType.EXECUTE_SHADOWTABLE_SYNC_TASK]: '执行',
  //执行
  [AuditEventActionType.APPROVE_SHADOWTABLE_SYNC_TASK]: '通过',
  //通过
  [AuditEventActionType.REJECT_SHADOWTABLE_SYNC_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.STOP_SHADOWTABLE_SYNC_TASK]: '终止',
  // //终止
  // 结构比对
  [AuditEventActionType.CREATE_STRUCTURE_COMPARISON_TASK]: '创建结构比对任务',
  [AuditEventActionType.STOP_STRUCTURE_COMPARISON_TASK]: '停止结构比对任务',
  [AuditEventActionType.EXECUTE_STRUCTURE_COMPARISON_TASK]: '执行结构比对任务',
  [AuditEventActionType.APPROVE_STRUCTURE_COMPARISON_TASK]: '同意结构比对任务',
  [AuditEventActionType.REJECT_STRUCTURE_COMPARISON_TASK]: '拒绝结构比对任务',
  [AuditEventActionType.CREATE_PARTITION_PLAN_TASK]: '新建',
  //新建
  [AuditEventActionType.EXECUTE_PARTITION_PLAN_TASK]: '执行',
  //执行
  [AuditEventActionType.APPROVE_PARTITION_PLAN_TASK]: '通过',
  //通过
  [AuditEventActionType.REJECT_PARTITION_PLAN_TASK]: '拒绝',
  //拒绝
  [AuditEventActionType.STOP_PARTITION_PLAN_TASK]: '终止',
  //终止

  [AuditEventActionType.CREATE_ALTER_SCHEDULE_TASK]: '新建',
  //新建
  [AuditEventActionType.STOP_ALTER_SCHEDULE_TASK]: '终止',
  //终止
  [AuditEventActionType.EXECUTE_ALTER_SCHEDULE_TASK]: '执行',
  //执行
  [AuditEventActionType.APPROVE_ALTER_SCHEDULE_TASK]: '通过',
  //通过
  [AuditEventActionType.REJECT_ALTER_SCHEDULE_TASK]: '拒绝',
  //拒绝

  // 数据管理事件操作
  [AuditEventActionType.ADD_DATABASE]: '增加数据库',
  //增加数据库
  [AuditEventActionType.TRANSFER_DATABASE_TO_PROJECT]: '转移项目',
  //转移项目
  [AuditEventActionType.DELETE_DATABASE]: '删除数据库',
  //删除数据库
  // 权限申请任务事件操作
  [AuditEventActionType.CREATE_PERMISSION_APPLY_TASK]: '创建权限申请任务',
  //创建权限申请任务
  [AuditEventActionType.APPROVE_PERMISSION_APPLY_TASK]: '同意权限申请任务',
  //同意权限申请任务
  [AuditEventActionType.REJECT_PERMISSION_APPLY_TASK]: '拒绝权限申请任务',
  //拒绝权限申请任务
  // 数据源管理事件操作
  [AuditEventActionType.CREATE_DATASOURCE]: '创建数据源',
  //创建数据源
  [AuditEventActionType.DELETE_DATASOURCE]: '删除数据源',
  //删除数据源
  [AuditEventActionType.UPDATE_DATASOURCE]: '更新数据源',
  //更新数据源
  // 项目管理事件操作
  [AuditEventActionType.CREATE_PROJECT]: '创建项目',
  [AuditEventActionType.ARCHIVE_PROJECT]: '归档项目',
  [AuditEventActionType.DELETE_PROJECT]: '删除项目',
  //创建项目
  // 审计事件操作
  [AuditEventActionType.CREATE_EXPORT_RESULT_SET_TASK]: '创建导出结果集任务',
  //'创建导出结果集任务'
  [AuditEventActionType.APPROVE_EXPORT_RESULT_SET_TASK]: '同意导出结果集任务',
  //'同意导出结果集任务'
  [AuditEventActionType.REJECT_EXPORT_RESULT_SET_TASK]: '拒绝导出结果集任务',
  //'拒绝导出结果集任务'
  [AuditEventActionType.EXECUTE_EXPORT_RESULT_SET_TASK]: '执行结果集任务',
  //'执行结果集任务'
  [AuditEventActionType.STOP_EXPORT_RESULT_SET_TASK]: '停止导出结果集任务',
  //'停止导出结果集任务'
  // 申请项目权限
  [AuditEventActionType.APPLY_PROJECT_PERMISSION]: '申请项目权限',
  [AuditEventActionType.CREATE_APPLY_PROJECT_PERMISSION_TASK]: '创建申请项目权限',
  [AuditEventActionType.APPROVE_APPLY_PROJECT_PERMISSION_TASK]: '同意申请项目权限',
  [AuditEventActionType.REJECT_APPLY_PROJECT_PERMISSION_TASK]: '拒绝申请项目权限',
 
  [AuditEventActionType.STOP_APPLY_PROJECT_PERMISSION_TASK]: '停止申请项目权限',
  // SQL安全规则管理
  [AuditEventActionType.UPDATE_SQL_SECURITY_RULE]: '修改 SQL 安全规则',
  // 申请项目权限
  [AuditEventActionType.APPLY_DATABASE_PERMISSION]: '申请库权限',
  [AuditEventActionType.CREATE_APPLY_DATABASE_PERMISSION_TASK]: '创建申请库权限',
  [AuditEventActionType.APPROVE_APPLY_DATABASE_PERMISSION_TASK]: '同意申请库权限',
  [AuditEventActionType.REJECT_APPLY_DATABASE_PERMISSION_TASK]: '拒绝申请库权限',
  [AuditEventActionType.STOP_APPLY_DATABASE_PERMISSION_TASK]: '停止申请库权限',

  [AuditEventActionType.DATABASE_PERMISSION_MANAGEMENT]: '库权限管理',
  [AuditEventActionType.GRANT_DATABASE_PERMISSION]: '新增库权限',
  [AuditEventActionType.REVOKE_DATABASE_PERMISSION]: '回收库权限',
  [AuditEventActionType.APPLY_TABLE_PERMISSION]: '申请表/视图权限',
  [AuditEventActionType.CREATE_APPLY_TABLE_PERMISSION_TASK]: '创建申请表/视图权限',
  [AuditEventActionType.APPROVE_APPLY_TABLE_PERMISSION_TASK]: '同意申请表/视图权限',
  [AuditEventActionType.REJECT_APPLY_TABLE_PERMISSION_TASK]: '拒绝申请表/视图权限',
  [AuditEventActionType.STOP_APPLY_TABLE_PERMISSION_TASK]: '停止申请表/视图权限',
  [AuditEventActionType.TABLE_PERMISSION_MANAGEMENT]: '表/视图权限管理',
  [AuditEventActionType.GRANT_TABLE_PERMISSION]: '新增表/视图权限管理',
  [AuditEventActionType.REVOKE_TABLE_PERMISSION]: '回收表/视图权限管理',
  // 自动授权规则
  [AuditEventActionType.CREATE_AUTOMATION_RULE]: '创建自动授权规则',
  [AuditEventActionType.ENABLE_AUTOMATION_RULE]: '启用自动授权规则',
  [AuditEventActionType.DISABLE_AUTOMATION_RULE]: '禁用自动授权规则',
  [AuditEventActionType.UPDATE_AUTOMATION_RULE]: '修改自动授权规则',
  [AuditEventActionType.DELETE_AUTOMATION_RULE]: '删除自动授权规则',

  [AuditEventActionType.CREATE_NOTIFICATION_CHANNEL]: '创建推送通道',
  [AuditEventActionType.UPDATE_NOTIFICATION_CHANNEL]: '修改推送通道',
  [AuditEventActionType.DELETE_NOTIFICATION_CHANNEL]: '删除推送通道',
  [AuditEventActionType.BATCH_UPDATE_NOTIFICATION_POLICIES]: '更新推送规则',

  [AuditEventActionType.BATCH_CREATE_SENSITIVE_COLUMNS]: '批量创建敏感列',
  [AuditEventActionType.BATCH_UPDATE_SENSITIVE_COLUMNS]: '批量更新敏感列',
  [AuditEventActionType.BATCH_DELETE_SENSITIVE_COLUMNS]: '批量删除敏感列',
  [AuditEventActionType.ENABLE_SENSITIVE_COLUMN]: '启用敏感列',
  [AuditEventActionType.DISABLE_SENSITIVE_COLUMN]: '禁用敏感列',

  // #region ------ 多库变更 -----
  [AuditEventActionType.CREATE_MULTIPLE_ASYNC_TASK]: '创建多库变更任务',
  [AuditEventActionType.EXECUTE_MULTIPLE_ASYNC_TASK]: '执行多库变更任务',
  [AuditEventActionType.STOP_MULTIPLE_ASYNC_TASK]: '停止多库变更任务',
  [AuditEventActionType.APPROVE_MULTIPLE_ASYNC_TASK]: '同意多库变更任务',
  [AuditEventActionType.REJECT_MULTIPLE_ASYNC_TASK]: '拒绝多库变更任务',
  // #endregion

  // #region ---- 多库变更模版管理 ----
  [AuditEventActionType.CREATE_DATABASE_CHANGE_CHANGING_ORDER_TEMPLATE]: '创建数据库变更顺序模板\t',
  [AuditEventActionType.DELETE_DATABASE_CHANGE_CHANGING_ORDER_TEMPLATE]: '删除数据库变更顺序模板\t',
  [AuditEventActionType.UPDATE_DATABASE_CHANGE_CHANGING_ORDER_TEMPLATE]: '更新数据库变更顺序模板\t',
  // #endregion
};

export function getEventFilterAndOptions(eventMeta: IAuditEvent[]) {
  const metas =
    eventMeta?.reduce((meta, { type, action }) => {
      if (meta[type]) {
        meta[type].push(action);
      } else {
        meta[type] = [action];
      }
      return meta;
    }, {}) ?? {};
  const filter = [];
  const options =
    Object.keys(metas)?.map((type) => {
      const children =
        metas[type]?.map((value) => {
          return {
            title: eventMeta?.find((i) => i.action === value)?.actionName,
            key: value,
            value,
          };
        }) ?? [];
      filter.push({
        text: eventMeta?.find((i) => i.type === type)?.typeName,
        value: type,
      });
      return {
        title: eventMeta?.find((i) => i.type === type)?.typeName,
        key: type,
        value: type,
        children: children,
      };
    }) ?? [];
  return {
    filter,
    options,
  };
}
