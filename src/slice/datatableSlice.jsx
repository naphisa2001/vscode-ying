import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: 0,
    data: [],
};

export const loginstudent = createAsyncThunk("loginstudent", async (body) => {
    console.log(body);
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/login`,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
});

export const insertstudent = createAsyncThunk("insertstudent", async (body) => {
    console.log(body);
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/register`,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
});

export const getdatatableall = createAsyncThunk("datatableall", async () => {
    const response = await axios.get(
        `${import.meta.env.VITE_APP_API}/studentdata`,
        {
            headers: {
                "Content-Type": "Application/json",
            },
        }
    );
    return response.data;
});

export const editstudent = createAsyncThunk("editstudent", async ({ id, body }) => {
    const response = await axios.patch(
        `${import.meta.env.VITE_APP_API}/studentupdate/${id}`,
        body,
        {
            headers: {
                "Content-Type": "Application/json",
            },
        }
    );
    return response.data;
});

export const deletestudent = createAsyncThunk("deletestudent", async (id, body) => {
    console.log(id, body);
    const response = await axios.delete(
        `${import.meta.env.VITE_APP_API}/studentdelete/${id}`,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
});


export const datatableSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: {
        // getdatatableall
        [getdatatableall.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [getdatatableall.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getdatatableall.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        //login
        [loginstudent.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [loginstudent.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [loginstudent.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        // insertstudent
        [insertstudent.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [insertstudent.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [insertstudent.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        // editstudent
        [editstudent.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [editstudent.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [editstudent.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        // deletestudent
        [deletestudent.pending]: (state) => {
            state.loading = true;
            state.error = "";
        },
        [deletestudent.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [deletestudent.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
    },
});

// Action creators are generated for each case reducer function
export const { decrement } = datatableSlice.actions;

export default datatableSlice.reducer;