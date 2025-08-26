import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { store } from './redux/store/index.jsx';
import { GridProvider } from './hooks/work-sheet-page-filter/work-sheet-page-select.jsx';
import FileUploadProvider from './hooks/search-terms/file-upload-header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FileUploadProvider>
      <GridProvider>
        <App />
      </GridProvider>
    </FileUploadProvider>
  </Provider>
);
