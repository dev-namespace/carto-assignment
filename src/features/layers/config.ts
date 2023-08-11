import { MAP_TYPES } from "@deck.gl/carto/typed";
import { Layer } from "./types";

export const initialLayers: Layer[] = [
    {
        id: "blockgroup",
        label: "Tileset",
        connection: "carto_dw",
        data: "carto-demo-data.demo_tilesets.sociodemographics_usa_blockgroup",
        type: MAP_TYPES.TILESET,
        getLineColor: [23, 184, 190],
        getFillColor: [255, 153, 31],
        lineWidthMinPixels: 0.5,
    },
    {
        label: "Retail Stores",
        id: "retail_stores",
        connection: "carto_dw",
        data: "carto-demo-data.demo_tables.retail_stores",
        type: MAP_TYPES.TABLE,
        pointRadiusMinPixels: 2,
        getLineColor: [0, 0, 0, 0.75],
        getFillColor: [238, 77, 90],
        lineWidthMinPixels: 1,
    },
    {
        id: "airports",
        label: "Airports",
        connection: "carto_dw",
        data: "carto-demo-data.demo_tables.world_airports",
        type: MAP_TYPES.TABLE,
        pointRadiusMinPixels: 2,
        getLineColor: [0, 0, 0, 1],
        getFillColor: [100, 14, 146],
        lineWidthMinPixels: 1,
    },
];
