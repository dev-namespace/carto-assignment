import type { CartoLayerProps } from "@deck.gl/carto/typed";
import { MVTLayerProps } from "@deck.gl/geo-layers/typed";

// Apparently the type CartoLayerProps is to deep for redux toolkit to handle
// I believe this is because CartoLayerProps is already a composite type. Damn Typescript!
export type Layer = MVTLayerProps & {
    label?: string;
    connection: CartoLayerProps["connection"];
    type: CartoLayerProps["type"];
    data: CartoLayerProps["data"];
};
