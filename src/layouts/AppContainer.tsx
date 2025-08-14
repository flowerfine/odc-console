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

import React, { useContext, useEffect } from "react";
import { ConfigProvider } from "antd";
import { ErrorBoundary } from "@ant-design/pro-components";
import { Helmet, Outlet, useAppData, useLocation } from "@umijs/max";
import { inject, observer } from "mobx-react";
import Context from "./MenuContext";
import StoreProvider from "./StoreProvider";
import { theme } from "./antdTheme";
import { SettingStore } from "@/store/setting";

interface IBasicLayoutProps {
  settingStore: SettingStore;
  dispatch: any;
  route: any;
  location: any;
  children?: any;
}

let timer = null;

const AppContainer: React.FC<IBasicLayoutProps> = (
  props: IBasicLayoutProps
) => {
  const { routes = [] } = useAppData();
  const location = useLocation();
  const { pathname } = location;
  const { settingStore } = props;

  const getContext = () => {
    return {
      location,
    };
  };

  const getPageTitle = (pathname: any) => {
    return "OceanBase Developer Center";
  };

  useEffect(() => {
    async function asyncEffect() {
      const array = Object.keys(routes).map((k) => routes[k]);
    }
    asyncEffect();
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{getPageTitle(pathname)}</title>
      </Helmet>
      <Context.Provider value={getContext()}>
          <div
            style={{
              height: "100%",
            }}
          >
            <Outlet />
          </div>
        </Context.Provider>
    </React.Fragment>
  );
};

const App = inject("settingStore")(observer(AppContainer));

export default (props: any) => (
  <ErrorBoundary>
    <ConfigProvider theme={theme}>
      <StoreProvider>
        <App {...props} />
      </StoreProvider>
    </ConfigProvider>
  </ErrorBoundary>
);
