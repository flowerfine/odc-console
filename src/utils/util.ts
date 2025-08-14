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

import { getIntl } from "@umijs/max";
import dayjs from "dayjs";

/**
 * 生成一个唯一key
 * @param suffixStr key后缀
 */
export const generateUniqKey = (function () {
  let key = 0;
  return function (suffixStr: string = ""): string {
    key = key + 1;
    return `${key}-${Date.now()}-${~~(Math.random() * 10000)}-${
      suffixStr || ""
    }`;
  };
})();

/**
 * TIMESTAMP(10) WITH LOCAL TIME ZONE => TIMESTAMP_WITH_LOCAL_TIME_ZONE
 */
export function convertColumnType(columnType: string) {
  return columnType
    ?.replace(/\(\d+\)/g, "")
    .replace(/\s/g, "_")
    .toUpperCase();
}


export function getFormatDateTime(time: number) {
  return time > 0 ? dayjs(time).format('YYYY-MM-DD HH:mm:ss') : '';
}
/**
 * 获取国际化时间
 */
export function getLocalFormatDateTime(time: number) {
  if (time <= 0) {
    return '';
  }
  return new Date(time).toLocaleString(getIntl()?.locale, {
    hour12: false,
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}