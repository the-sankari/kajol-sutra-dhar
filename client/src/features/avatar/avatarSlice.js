import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch SVG avatar from DiceBear based on name
export const fetchAvatar = createAsyncThunk(
  "avatar/fetchAvatar",
  async (name) => {
    const url = `https://api.dicebear.com/9.x/identicon/svg?seed=${encodeURIComponent(name)}&backgroundColor=transparent`;
    const response = await axios.get(url, { responseType: "text" });
    return { name, avatar: response.data };
  }
);

const avatarSlice = createSlice({
  name: "avatar",
  initialState: {
    avatars: {}, // key: name, value: SVG string
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvatar.fulfilled, (state, action) => {
      state.avatars[action.payload.name] = action.payload.avatar;
    });
  },
});

export default avatarSlice.reducer;
