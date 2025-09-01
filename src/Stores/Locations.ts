import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { revertAll } from './RevertAll'
import { LocationListItem } from '../Types/CommonTypes'

const initialState: LocationListItem[] = []

export const locationsSlice = createSlice({
  name: 'Locations',
  initialState,
  extraReducers: (builder) =>
    builder.addCase(revertAll, () => {
      return initialState
    }),
  reducers: {
    setLocations: (state, action: PayloadAction<LocationListItem[]>) => {
      return action.payload
    },
    clearLocations: () => {
      return initialState
    },
  },
})

export const { setLocations, clearLocations } = locationsSlice.actions

export default locationsSlice.reducer
