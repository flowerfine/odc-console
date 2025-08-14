export const DB_STORES = {
  tableMeta: "tableMeta",
};

export enum PageType {
  SQL = 'SQL',
  OTHER = 'OTHEr'
}

export default {
  PKG_HEAD: 'PACKAGE_HEAD',
  PKG_BODY: 'PACKAGE_BODY',
  FUNCTION: 'FUNCTION',
  PROCEDURE: 'PROCEDURE',
  TRIGGER: 'TRIGGER',
  SYNONYM: 'SYNONYM',
  TYPE: 'TYPE',
};

export enum PLType {
  PKG_HEAD = 'PACKAGE_HEAD',
  PKG_BODY = 'PACKAGE_BODY',
  PACKAGE_ROOT = 'PACKAGE_ROOT',
  FUNCTION = 'FUNCTION',
  PROCEDURE = 'PROCEDURE',
  TRIGGER = 'TRIGGER',
  SYNONYM = 'SYNONYM',
  TYPE = 'TYPE',
  ANONYMOUSBLOCK = 'ANONYMOUS_BLOCK',
}

export interface IPage {
  key: string;
  title: string;
  type: PageType;
  startSaving?: boolean;
  isSaved: boolean;
  isDocked?: boolean; // 是否常驻
  params?: any; // 附加参数
}