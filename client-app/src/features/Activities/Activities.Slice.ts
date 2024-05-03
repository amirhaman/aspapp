import { PayloadAction, current } from '@reduxjs/toolkit';
import { ActivityType } from '@/types/@types.articles';
import { createSlice } from '@reduxjs/toolkit';

interface FilterSortState {
  filterText: string;
  sortKey: string | null;
  sortOrder: 'asc' | 'desc';
}

const initialStateFilters: FilterSortState = {
  filterText: '',
  sortKey: null,
  sortOrder: 'asc',
};

const initialState: ActivityType[] = [];


const dataSlice = createSlice({
  name: 'activities',
  initialState: initialState,
  reducers: {
    setActivities: (state : any, action: PayloadAction<ActivityType[]>) => {
      return state = action.payload;
    },
    updateActivity: (state : any, action: PayloadAction<ActivityType[]>) => {
      const activities  = current(state);
      const index = activities.findIndex((item: ActivityType) => item.id === action.payload[0].id);
      if (index !== -1) {
        state[index] = action.payload[0];
        return state;
      }

    }
  }
});

const filterSortSlice = createSlice({
  name: 'activitiesFilterSort',
  initialState: initialStateFilters,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      state.filterText = action.payload;
    },
    setSortKey: (state, action: PayloadAction<string | null>) => {
      state.sortKey = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    }
  }
});

export const { setFilterText, setSortKey, setSortOrder } = filterSortSlice.actions;
export const { setActivities, updateActivity } = dataSlice.actions;

export const activities = dataSlice.reducer;
export const activitiesFilterSort = filterSortSlice.reducer