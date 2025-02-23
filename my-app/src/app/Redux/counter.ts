import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  allJobs: any[];
  name: string;
}

const initialState: CounterState = {
  name: "",
  allJobs: []
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<any[]>) => {
      state.allJobs = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  },
});

export const { setName, setJobs } = FilterSlice.actions;

export const selectJobs = (state: any) => {
  const { name, allJobs } = state.filter;
  if (!name) return allJobs;
  const lower = name.toLowerCase();
  return allJobs.filter((job: any) => {
    return (
      (job.role && job.role.toLowerCase().includes(lower)) ||
      (job.level && job.level.toLowerCase().includes(lower)) ||
      (job.location && job.location.toLowerCase().includes(lower))
    );
  });
};

export default FilterSlice.reducer;
