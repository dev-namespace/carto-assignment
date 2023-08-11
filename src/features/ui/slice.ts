import { createSlice } from "@reduxjs/toolkit";

export interface UIState {
    drawerOpen: boolean;
}

const initialState: UIState = {
    drawerOpen: true,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.drawerOpen = true;
        },
        closeDrawer: (state) => {
            state.drawerOpen = false;
        },
    },
});

export const { openDrawer, closeDrawer } = counterSlice.actions;

export default counterSlice.reducer;
