import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiUser from '../../untils/api/user';

export const getCurrent = createAsyncThunk('user/getCurrent', async (_, { rejectWithValue }) => {
    try {
        const response = await ApiUser.getCurrent();
        if (response.data.success) {
            return response.data.userData;
        } else {
            return rejectWithValue(response.data.message);
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
