/**
 * Copyright 2018-2020 Cargill Incorporated
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

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { ToastProvider } from 'react-toast-notifications';
import { LocalNodeProvider } from './state/localNode';
import Content from './components/Content';
import MainHeader from './components/MainHeader';
import { UploadContractForm } from './components/forms/upload_contract';

function App() {
  return (
    <div className="contracts-app">
      <LocalNodeProvider>
        <ToastProvider>
          <Router>
            <Switch>
              <Route exact path="/contracts">
                <MainHeader />
                <Content />
              </Route>
              <Route path="/contracts/propose">
                <UploadContractForm />
              </Route>
            </Switch>
          </Router>
        </ToastProvider>
      </LocalNodeProvider>
    </div>
  );
}

export default App;
