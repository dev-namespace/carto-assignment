import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Layer } from "./types";
import { initialLayers } from "./config";
import { RootState } from "app/store";

export interface LayersState {
    layers: Array<Layer>;
}

const initialState: LayersState = {
    layers: initialLayers,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addLayer: (state, action: PayloadAction<Layer>) => {
            state.layers.push(action.payload);
        },
        removeLayer: (state, action: PayloadAction<string>) => {
            state.layers = state.layers.filter(
                (layer) => layer.id !== action.payload,
            );
        },
        updateLayer: (
            state,
            action: PayloadAction<{ id: string; props: Partial<Layer> }>,
        ) => {
            const layer = state.layers.find(
                (layer) => layer.id === action.payload.id,
            );
            if (layer) {
                Object.assign(layer, action.payload.props);
            } else {
                console.error(
                    `Layer with id ${action.payload.id} not found in state`,
                );
            }
        },
    },
});

// selectors

export const getLayers = (state: RootState): Layer[] => state.layers.layers;

export const { addLayer, removeLayer, updateLayer } = counterSlice.actions;

export default counterSlice.reducer;
