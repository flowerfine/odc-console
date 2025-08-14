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

import { message } from 'antd';
import { action, observable } from 'mobx';

export const themeKey = 'odc-theme';
const SPACE_CONFIG_EXPIRES = 60 * 1000;

interface IThemeConfig {
  editorTheme: Record<string, string>;
  className: string;
  sheetTheme: string;
  cmdTheme: 'dark' | 'white';
  key: string;
  maskType: 'white' | 'dark';
  chartsTheme: string;
}

export enum EThemeConfigKey {
  ODC_WHITE = 'White',
  ODC_DARK = 'Dark',
}
const themeConfig: { [key: string]: IThemeConfig } = {
  [EThemeConfigKey.ODC_WHITE]: {
    key: EThemeConfigKey.ODC_WHITE,
    editorTheme: {
      VSCode: 'vs',
      OceanBase: 'obwhite',
      'VSCode-HC': 'hc-light',
      GitHub: 'github',
      Monokai: 'vs',
    },
    className: 'odc-white',
    sheetTheme: 'white',
    cmdTheme: 'white',
    maskType: 'white',
    chartsTheme: 'white',
  },
  [EThemeConfigKey.ODC_DARK]: {
    key: EThemeConfigKey.ODC_DARK,
    editorTheme: {
      VSCode: 'vs-dark',
      OceanBase: 'obdark',
      'VSCode-HC': 'hc-black',
      GitHub: 'githubDark',
      Monokai: 'monokai',
    },
    className: 'odc-dark',
    sheetTheme: 'dark',
    cmdTheme: 'dark',
    maskType: 'dark',
    chartsTheme: 'dark',
  },
};
const defaultTheme = EThemeConfigKey.ODC_WHITE;

export class SettingStore {
  @observable
  public collapsed: boolean = true; // sidebar

  @observable
  public siderWidth: number = 260; // sidebar width

  @observable
  public theme: IThemeConfig = themeConfig[defaultTheme];

  /**
   * 是否支持数据的导出，包括下载与结果集导出
   */
  @observable
  public enableDataExport: boolean = false;

  /**
   * 多库变更
   */
  @observable
  public enableMultipleAsyncTask: boolean = false;

  /**
   * 影子表同步
   */
  @observable
  public enableShadowTableSync: boolean = false;

  /**
   * 结构对比
   */
  public enableStructureCompare: boolean = false;

  public cacheStorage = new Map();
  /**
   * SQL 计划
   */
  public enableSQLPlan: boolean = false;

  /**
   * 分区计划
   */
  public enablePartitionPlan: boolean = false;

  /**
   * 数据归档
   */
  public enableDataArchive: boolean = false;

  /**
   * 数据清理
   */
  public enableDataClear: boolean = false;

  /**
   * 申请库权限
   */
  public enableApplyDBAuth: boolean = false;

  /**
   * 申请项目权限
   */
  public enableApplyProjectAuth: boolean = false;

  /**
   * 申请表权限
   */
  public enableApplyTableAuth: boolean = false;

  /**
   * 工作台
   */
  @observable
  public enableWorkbench: boolean = false;

  @observable
  public enableAsyncTask: boolean = false;

  @observable
  public enableDBImport: boolean = false;

  @observable
  public enableAuthRule: boolean = false;

  @observable
  public enableDBExport: boolean = false;

  @observable
  public enableOSC: boolean = false;

  @observable
  public enableOSCLimiting: boolean = false;

  @observable
  public enableAll: boolean = false;

  @observable
  public enableMockdata: boolean = false;

  @observable
  public enableLogicaldatabase: boolean = false;

  /**
   * 上传文件是否为oss，s3之类的云存储
   */
  @observable
  public isUploadCloudStore: boolean = false;

  /**
   * obclient
   */
  @observable
  public enableOBClient: boolean = false;

  /**
   * personal record
   */
  @observable
  public enablePersonalRecord: boolean = false;

  /**
   * 新功能提示
   */
  @observable
  public enableVersionTip: boolean = true;

  /**
   * 结果集最大条数,-1表示不限制
   */
  @observable
  public maxResultSetRows: number = Number.MAX_SAFE_INTEGER;


  /**
   * 系统配置是否初始化完毕
   */
  @observable
  public settingLoadStatus: 'init' | 'loading' | 'done' | 'failed' = 'init';

  @observable
  public headerStyle: any = {
    background: '#1F293D',
    boxShadow: '0px 1px 4px 0px rgba(0,21,41,0.12)',
  };

  @action
  public setHeaderStyle(headerStyle: any) {
    this.headerStyle = headerStyle;
  }

  @action
  public setTheme(theme: string) {
    const newTheme = themeConfig[theme] || themeConfig[defaultTheme];
    this.theme = newTheme;
    localStorage.setItem(themeKey, themeConfig[theme] ? theme : defaultTheme);
  }

  @action
  public hideHeader() {
    this.headerStyle = {
      ...this.headerStyle,
      display: 'none',
    };
  }

  @action
  public showHeader() {
    this.headerStyle = {
      ...this.headerStyle,
      display: 'display',
    };
  }

  @action
  public toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  @action
  public setSiderWidth(width: number) {
    this.siderWidth = width;
  }
}

export default new SettingStore();
