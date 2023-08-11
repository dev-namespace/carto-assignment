import LayersIcon from '@mui/icons-material/Layers';
import { Box, Tab, Tabs } from "@mui/material";
import LayersTab from "./LayersTab";

const Sidebar = () => {
    const selectedTab = 0;

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} aria-label="basic tabs example">
                    <Tab icon={<LayersIcon/>} label="LAYERS" />
                </Tabs>
            </Box>
            <LayersTab />
        </>
    );
};

export default Sidebar;
