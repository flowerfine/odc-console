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

import React, { useEffect, useState } from "react";
import WorkBenchLayout from "./Layout";
import SideBar from "./SideBar";
import WindowManager from "./Window/window";
import pageStore from "@/store/window";
import { openNewSQLPage } from "@/store/helper/page/openPage";
import { useSnapshot } from "@umijs/max";
import WorkspaceStore from "./context/WorkspaceStore";

interface WorkBenchProps {}

const WorkBench: React.FC<WorkBenchProps> = (props: WorkBenchProps) => {
  const pageStoreSnap = useSnapshot(pageStore.store);
  const { pages = [], activePageKey } = pageStoreSnap;
 
  useEffect(() => {
    async function asyncEffect() {
      await pageStore.initStore();
    }
    asyncEffect();
    return () => {};
  }, []);

  const handleActivatePage = (activeKey: string) => {
    pageStore.setActivePageKeyAndPushUrl(activeKey);
  };

  const handleOpenPage = async () => {
    openNewSQLPage(null);
  };

  const handleClosePage = (targetPageKey: string) => {
    pageStore.close(targetPageKey);
  };

  return (
    <>
      <WorkBenchLayout
        sideBar={<SideBar />}
        editorGroup={
          <WindowManager
            pages={pages}
            activeKey={activePageKey}
            onActivatePage={handleActivatePage}
            onOpenPage={handleOpenPage}
            onClosePage={handleClosePage}
          />
        }
      />
    </>
  );
};

export default function WorkSpaceWrap(props: WorkBenchProps) {
  
  return (
    <WorkspaceStore>
      <WorkBench {...props} />
    </WorkspaceStore>
  );
}
