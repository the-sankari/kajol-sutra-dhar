import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore"; // ✅ FIXED HERE
import { projectsCollection } from "../../services/firebase/firebase";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const snapshot = await getDocs(projectsCollection);
    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return projects;
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
