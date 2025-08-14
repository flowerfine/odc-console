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

import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { Space, Tree, Spin, Button } from "antd";
import { throttle } from "lodash";
import { ConnectType } from "@/d.ts";
import SyncMetadata from "@/components/Button/SyncMetadata";
import Reload from "@/components/Button/Reload";
import Group from "./DatabaseGroup";
import DatabaseSearch from "./DatabaseSearch";
import styles from "./index.less";
import { PlusOutlined } from "@ant-design/icons";

interface IProps {}

const ResourceTree: React.FC<IProps> = function (props) {

  const [wrapperHeight, setWrapperHeight] = useState(0);
  const clockRef = useRef(null);
  const [envs, setEnvs] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [connectTypes, setConnectTypes] = useState<ConnectType[]>([]);
  const treeWrapperRef = useRef<HTMLDivElement>();
  const treeRef = useRef(null);
  const [searchValue, setSearchValue] = useState<string>(null);
  
  useEffect(() => {
    const resizeHeight = throttle(() => {
      setWrapperHeight(treeWrapperRef?.current?.offsetHeight);
    }, 500);
    setWrapperHeight(treeWrapperRef.current?.clientHeight);
    window.addEventListener("resize", resizeHeight);
    return () => {
      window.removeEventListener("resize", resizeHeight);
    };
  }, []);

  return (
    <>
      <div className={styles.resourceTree}>
        <div className={styles.title}>
          <span className={styles.titleText}>数据库</span>
          <span className={styles.titleAction}>
            <Space size={8} style={{ lineHeight: 1.5 }}>
              <Group />
              <SyncMetadata
              />
              <Reload
                key="ResourceTreeReload"
                onClick={() => {}}
                style={{ display: "flex" }}
              />
            </Space>
          </span>
        </div>

        <div className={styles.search}>
          <DatabaseSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Button
                size="small"
                type="primary"
                className={styles.newDataSourceButton}
                icon={<PlusOutlined />}
              />
        </div>
        <div ref={treeWrapperRef} className={styles.tree}>
          <Spin spinning={loading}>
            <Tree
                ref={treeRef}
                expandAction="click"
                showIcon
                onExpand={(_, info) => {
                  
                }}
                treeData={[]}
                
                // 需要初始一个height值，否则初始时wrapperHeight为0，会先渲染全量数据
                height={wrapperHeight || 1000}
                selectable={true}
              />
          </Spin>
        </div>
      </div>
    </>
  );
};

export default ResourceTree;
