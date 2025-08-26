import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../../features/auth/authSlice.jsx';
import userReducer from '../../features/user/userSlice.jsx';
import gridReducer from '../../features/work-sheet/grid-selection.jsx';
import fileUploadReducer from '../../features/search-terms/file-upload.jsx';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    grid: gridReducer,
    fileUpload: fileUploadReducer,
  }
});

export default store;
