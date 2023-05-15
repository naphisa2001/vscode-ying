import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slice/dataSlice'
import testSlice from './slice/testSlice'
import datatableSlice from './slice/datatableSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice,
    test: testSlice,
    datatable: datatableSlice
  },
})