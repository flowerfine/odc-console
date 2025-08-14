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

import { PageType } from '@/constants';
import {
  IScript,
  IScriptMeta,
  ScriptId,
} from '@/d.ts';
import pageStore from '@/store/window';
import { Page } from './base';
import { generateUniqKey } from '@/utils/util';

export class SQLPage extends Page {
  public pageParams: {
    scriptText: string;
    scriptId?: ScriptId;
    cid: number;
    fromTask?: boolean;
    pageIndex?: number;
    dbName?: string;
  } & Partial<IScriptMeta>;
  static getTitleByParams(params: SQLPage['pageParams']) {
    if (params?.scriptId) {
      return params?.objectName;
    } else if (params?.dbName) {
      return params?.dbName;
    }
    return 'SQL 窗口';
  }
  public findCurrentNum() {
    const indexList = pageStore.store.pages
      ?.filter?.((p) => p.type === PageType.SQL)
      ?.map((p) => p.params?.pageIndex)
      ?.filter(Boolean);
    let i = 1;
    while (true) {
      if (indexList.includes(i)) {
        i++;
      } else {
        return i;
      }
    }
  }
  constructor(databaseId: number, script?: IScript, fromTask: boolean = false) {
    super();
    this.pageType = PageType.SQL;
    if (script) {
      this.pageKey = `sqlpage-scriptId:${script.scriptMeta?.id}`;
      this.pageTitle = '--';
      this.pageParams = {
        ...script?.scriptMeta,
        scriptText: script.content,
        scriptId: script.scriptMeta?.id,
        cid: databaseId,
      };
    } else {
      const pageIndex = this.findCurrentNum();
      this.pageKey = `sqlpage-new-no:${generateUniqKey()}`;
      this.pageTitle = '--';
      this.pageParams = {
        pageIndex: pageIndex,
        scriptText: '',
        cid: databaseId,
        fromTask,
      };
    }
  }
}
