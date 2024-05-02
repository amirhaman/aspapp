import { configureStore } from '@reduxjs/toolkit';
import { activities, activitiesFilterSort } from '@/features/Activities/Activities.Slice';

const store = configureStore({
  reducer: {
    activities: activities,
    activitiesFilterSort: activitiesFilterSort,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;