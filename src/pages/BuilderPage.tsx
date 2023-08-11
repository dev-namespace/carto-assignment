import MapViewer from "components/MapViewer";
import SidebarDrawer from "components/sidebar/SidebarDrawer";
import Topbar from "components/Topbar";
import { Box } from "@mui/material";

const BuilderPage = () => {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <Topbar />
                <SidebarDrawer />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, overflow: "auto", position: "relative" }}
                >
                    <MapViewer />
                </Box>
            </Box>
        </div>
    );
};

export default BuilderPage;
