import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppRouter } from './routers/index.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.ts';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <AppRouter />
        </App>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);
