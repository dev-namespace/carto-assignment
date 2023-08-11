import { useSelector } from "react-redux";
import { getLayers } from "features/layers/slice";
import { MemoizedEditLayer } from "./EditLayer";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const LayersTab = () => {
    const layers = useSelector(getLayers);

    const layerAccordions = layers.map((layer, i) => (
        <Accordion key={layer.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${i}a-content`}
                id={`panel${i}a-header`}
            >
                <Typography variant="subtitle1">{layer.label || layer.id}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MemoizedEditLayer layer={layer} />
            </AccordionDetails>
        </Accordion>
    ));

    return <div>{layerAccordions}</div>;
};

export default LayersTab;
