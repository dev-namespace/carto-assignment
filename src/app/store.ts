import { configureStore } from "@reduxjs/toolkit";
import layersReducer from "features/layers/slice";
import uiReducer from "features/ui/slice";

export const store = configureStore({
    reducer: {
        layers: layersReducer,
        ui: uiReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
