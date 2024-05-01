import { PayloadAction } from '@reduxjs/toolkit';
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

interface FilterSortState {
  filterText: string;
  sortKey: string | null;
  sortOrder: 'asc' | 'desc';
}

const initialFilterSortState: FilterSortState = {
  filterText: '',
  sortKey: null,
  sortOrder: 'asc'
};

const dataSlice = createSlice({
  name: 'activities',
  initialState: initialState,
  reducers: {
    setActivities: (state : any, action: PayloadAction<ActivityType[]>) => {
      return state = action.payload;
    }
  }
});

const filterSortSlice = createSlice({
  name: 'activitiesFilterSort',
  initialState: initialStateFilters,
  reducers: {
    setFilterText: (state, action: PayloadAction<string>) => {
      console.log("setting up filter text",action.payload )
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
export const { setActivities } = dataSlice.actions;

export const activities = dataSlice.reducer;
export const activitiesFilterSort = filterSortSlice.reducer