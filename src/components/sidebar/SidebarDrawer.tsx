import { IconButton, Typography, Divider, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { useDispatch } from "react-redux";
import { closeDrawer } from "features/ui/slice";
import Sidebar from "./Sidebar";

const drawerWidth = 340;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const SidebarDrawer = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.ui.drawerOpen);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    backgroundColor: "#F8F9F9",
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
                <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ marginRight: "auto", marginLeft: "10px" }}
                >
                    SETTINGS
                </Typography>
                <IconButton onClick={() => dispatch(closeDrawer())}>
                    <ChevronRightIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Sidebar />
        </Drawer>
    );
};

export default SidebarDrawer;
