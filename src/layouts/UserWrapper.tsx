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

import React, { useContext, useEffect, useState } from "react";
import { history, Outlet, useLocation } from "@umijs/max";
import { PageLoadingContext } from "./PageLoadingWrapper";

interface IProps {}

enum STATUS_TYPE {
  INIT,
  LOADING,
  DONE,
  ERROR,
}

// 检测用户登陆状态和初始化信息，这里直接干掉了
const UserWrapper: React.FC<IProps> = function ({ children }) {
  const [status, setStatus] = useState<STATUS_TYPE>(STATUS_TYPE.DONE);
  const location = useLocation();
  const pageContext = useContext(PageLoadingContext);

  function checkAutoLogin() {
    const query: {
      [key: string]: any;
    } = new URLSearchParams(location.search);
    // 忽略登陆
    return true;
  }
  async function organizationErrorResolve() {
    setStatus(STATUS_TYPE.DONE);
  }

  async function userFrozenErrorResolve() {
    history.replace("/exception/403");
  }

  useEffect(() => {
    console.log("checkAndInit");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default UserWrapper;
