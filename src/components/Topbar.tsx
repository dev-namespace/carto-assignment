import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openDrawer } from "features/ui/slice";

const TopBar = () => {
    const dispatch = useDispatch();

    const handleOpenDrawer = useCallback(() => {
        dispatch(openDrawer());
    }, [dispatch]);

    return (
        <AppBar position="static" sx={{ backgroundColor: "#162945" }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ paddingLeft: 2 }}
                >
                    µBuilder
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ marginLeft: "auto" }}
                    onClick={handleOpenDrawer}
                >
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
