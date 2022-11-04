import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { jobsApi } from "./jobs/jobsApiSlice";

export const store = configureStore({
   reducer: {
[jobsApi.reducerPath]: jobsApi.reducer,
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(jobsApi.middleware)
})