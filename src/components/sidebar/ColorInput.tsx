import { Box, Input, Typography } from "@mui/material";
import React from "react";

interface ColorInputProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
}

const ColorInput = ({ label, value, setValue }: ColorInputProps) => {
    return (
        <Box sx={{ marginTop: 1, marginLeft: 2 }}>
            <Typography variant="body2">{label}</Typography>
            <Input
                type="color"
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                sx={{ width: "254px" }}
            />
        </Box>
    );
};

export const MemoizedColorInput = React.memo(ColorInput);

export default ColorInput;
