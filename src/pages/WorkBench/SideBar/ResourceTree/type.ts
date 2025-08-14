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

import { DataNode } from 'antd/lib/tree';
import { DbObjectType, IPackage } from '@/d.ts';
import { IEnvironment } from '@/d.ts/environment';

export enum ResourceNodeType {
  Connection,
  Database,
  TableRoot,
  Table,
  TableColumnRoot,
  TableColumn,
  TableIndexRoot,
  TableIndex,
  TablePartitionRoot,
  TablePartition,
  TableConstraintRoot,
  TableConstraint,
  ViewRoot,
  View,
  ViewColumnRoot,
  ViewColumn,
  FunctionRoot,
  Function,
  FunctionParamRoot,
  FunctionParam,
  FunctionVariableRoot,
  FunctionVariable,
  FunctionReturnTypeRoot,
  FunctionReturnType,
  ProcedureRoot,
  Procedure,
  ProcedureParamRoot,
  ProcedureParam,
  ProcedureVariableRoot,
  ProcedureVariable,
  PackageRoot,
  Package,
  PackageHead,
  PackageHeadVariableRoot,
  PackageHeadVariable,
  PackageHeadProgramRoot,
  PackageBody,
  PackageBodyVariableRoot,
  PackageBodyVariable,
  PackageBodyProgramRoot,
  TriggerRoot,
  Trigger,
  SequenceRoot,
  Sequence,
  SynonymRoot,
  Synonym,
  PublicSynonymRoot,
  PublicSynonym,
  TypeRoot,
  Type,
  TypeVariableRoot,
  TypeVariable,
  TypeProgramRoot,
  ExternalTable,
  ExternalTableRoot,
  ExternalTableColumnRoot,
  // 只会在menu中用，用来区别function和type function 的菜单
  TypeFunction,
  TypeProcedure,
  PackageHeadFunction,
  PackageHeadProcedure,
  PackageBodyFunction,
  PackageBodyProcedure,
  GroupNodeProject,
  GroupNodeDataSource,
  GroupNodeConnectType,
  GroupNodeEnviponment,
  GroupNodeCluster,
  GroupNodeTenant,
  SecondGroupNodeDataSource,
  /** 物化视图 */
  MaterializedViewRoot,
  MaterializedView,
  MaterializedViewColumnRoot,
  MaterializedViewColumn,
  MaterializedViewIndexRoot,
  MaterializedViewIndex,
  MaterializedViewPartitionRoot,
  MaterializedViewPartition,
  MaterializedViewConstraintRoot,
  MaterializedViewConstraint,
}

interface ExtraData {
  type: ResourceNodeType;
  data?: any;
  sessionId?: string;
  packageName?: string;
  children?: (DataNode & ExtraData)[];
  menuKey?: ResourceNodeType;
  pkg?: Partial<IPackage>;
  cid?: number;
  dbObjectType?: DbObjectType;
  warning?: string;
  tip?: string;
  env?: IEnvironment;
  onClick?: (node: TreeDataNode) => void;
  doubleClick?: (session: any, node: TreeDataNode) => void;
}

export type TreeDataNode = DataNode & ExtraData;
