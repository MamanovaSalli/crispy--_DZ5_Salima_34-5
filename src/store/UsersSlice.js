import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({dispatch}) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = response.json();
    dispatch(getUsersInf(posts))
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.preloader = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.preloader = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.preloader = false;
            });
    }
});

export const { getUsersInf } = usersSlice.actions;

export const selectAllUsers = (state) => state.users.users;

export default usersSlice.reducer;