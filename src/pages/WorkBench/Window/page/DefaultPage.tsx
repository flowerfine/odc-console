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

import { Typography } from "antd";
import Icon from "@ant-design/icons";
import styles from "./DefaultPage.less";
import { openNewSQLPage } from "@/store/helper/page";
import { ReactComponent as ConsoleSQLSvg } from "@/svgr/Console-SQL.svg";

export default function DefaultPage() {
  return (
    <div
      style={{
        marginLeft: "50%",
        marginTop: 100,
        transform: "translateX(-50%)",
        width: 360,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Typography.Title level={4}>快速开始</Typography.Title>
      <div
        className={styles.item}
        onClick={() => {
          openNewSQLPage(null);
        }}
      >
        <div className={styles.icon}>
          <Icon component={ConsoleSQLSvg} />
        </div>
        <div className={styles.label}>打开 SQL 窗口</div>
      </div>
    </div>
  );
}
