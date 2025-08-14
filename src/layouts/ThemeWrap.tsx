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

import React, { useEffect, useState } from 'react';
import { ConfigProvider, theme as AntdTheme } from 'antd/es';
import { Outlet } from '@umijs/max';

interface IProps {}

const ThemeWrap: React.FC<IProps> = function ({ children }) {
  const [maskMode, setMaskMode] = useState<'dark' | 'white'>(null);
  
  return (
    <ConfigProvider
      theme={{
        algorithm:AntdTheme.darkAlgorithm
      }}
    >
      {maskMode && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            animationName: maskMode === 'dark' ? 'odcDarkMask' : 'odcWhiteMask',
            animationDuration: '0.3s',
          }}
        />
      )}
      <Outlet />
    </ConfigProvider>
  );
};

export default ThemeWrap;
