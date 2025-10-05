import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const res = await fetch(`${API_URL}/projects`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
    }
    const data = await res.json();
    return data.projects || [];
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    selectedProject: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
