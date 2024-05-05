import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, {dispatch}) {
        try {
            dispatch(preloaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if (response.status >= 200 || response.status <= 204) {
                const users = await response.json()
                dispatch(getPostsInfo(users))

            }
        } catch (e) {
            throw e
        } finally {
            dispatch(preloaderOff)
        }

    }
)
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        title: '',
        users: [],
        preloader: false
    },
    reducers: {
        getPostsInfo: (state, action) => {
            state.users = action.payload
        },
        preloaderOff: (state, action) => {
            state.preloader = false
        },
        preloaderOn: (state, action) => {
            state.preloader = true
        },
    }
})

export const { getPostsInfo, preloaderOff, preloaderOn} = usersSlice.actions

export default usersSlice.reducer
