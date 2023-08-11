import { Layer } from "features/layers/types";
import { MemoizedValueInput } from "./ValueInput";
import { MemoizedColorInput } from "./ColorInput";
import { updateLayer } from "features/layers/slice";
import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Color } from "@deck.gl/carto/typed/style/palette";
import { hexToRgb, rgbToHex } from "@/utils/colors";
import { MAP_TYPES } from "@deck.gl/carto/typed";

interface Props {
    layer: Layer;
}

const EditLayer = ({ layer }: Props) => {
    const dispatch = useDispatch();

    const handleRadiusChange = useCallback(
        (value: number) => {
            dispatch(
                updateLayer({
                    id: layer.id,
                    props: { pointRadiusMinPixels: value },
                }),
            );
        },
        [dispatch, layer.id],
    );

    const handleOutlineWidthChange = useCallback(
        (value: number) => {
            dispatch(
                updateLayer({
                    id: layer.id,
                    props: { lineWidthMinPixels: value },
                }),
            );
        },
        [dispatch, layer.id],
    );

    const handleFillColorChange = useCallback(
        (value: string) => {
            const rgb = hexToRgb(value);
            dispatch(
                updateLayer({
                    id: layer.id,
                    props: { getFillColor: [rgb[0], rgb[1], rgb[2]] },
                }),
            );
        },
        [dispatch, layer.id],
    );

    const handleLineColorChange = useCallback(
        (value: string) => {
            const rgb = hexToRgb(value);
            dispatch(
                updateLayer({
                    id: layer.id,
                    props: { getLineColor: [rgb[0], rgb[1], rgb[2]] },
                }),
            );
        },
        [dispatch, layer.id],
    );

    return (
        <div>
            <MemoizedColorInput
                label="Fill Color"
                value={rgbToHex(layer.getFillColor as Color)}
                setValue={handleFillColorChange}
            />
            {layer.type !== MAP_TYPES.TILESET &&
                <MemoizedValueInput
                    label="Radius"
                    value={layer.pointRadiusMinPixels}
                    setValue={handleRadiusChange}
                    min={0}
                    max={20}
                    step={1}
                />
            }
            <MemoizedColorInput
                label="Outline Color"
                value={rgbToHex(layer.getLineColor as Color)}
                setValue={handleLineColorChange}
            />
            <MemoizedValueInput
                label="Outline Width"
                value={layer.lineWidthMinPixels}
                setValue={handleOutlineWidthChange}
                min={0}
                max={10}
                step={1}
            />
        </div>
    );
};

export const MemoizedEditLayer = React.memo(EditLayer);

export default EditLayer;
