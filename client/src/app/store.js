import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projects/projectsSlice";
import avatarReducer from "../features/avatar/avatarSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    avatar: avatarReducer,
  },
});
