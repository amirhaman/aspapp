import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '@/components/Articles/Articles.Slice';

export default configureStore({
  reducer: {
    articles: articlesSlice,
    // user: authenticationSlice,
    // fileUpload: fileUploadSlice,
    // geoLocation: geoLocationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
