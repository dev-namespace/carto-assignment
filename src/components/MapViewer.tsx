import DeckGL from "@deck.gl/react/typed";
import { StaticMap } from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto/typed";
import { CartoLayer } from "@deck.gl/carto/typed";
import { useSelector } from "react-redux";
import { getLayers } from "@/features/layers/slice";
import { initialViewState } from "@/features/map/config";

const MapViewer = () => {
    const layerData = useSelector(getLayers)
    const layers = layerData.map(layer => new CartoLayer(layer))

    return (
        <DeckGL
            width="100%"
            height="100%"
            layers={layers}
            initialViewState={initialViewState}
            controller={true}
        >
            <StaticMap mapStyle={BASEMAP.POSITRON} />
        </DeckGL>
    );
};

export default MapViewer;
