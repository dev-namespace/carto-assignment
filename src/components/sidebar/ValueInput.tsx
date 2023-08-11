import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
    width: 42px;
`;

interface ValueInputProps {
    value?: number;
    setValue: (value: number) => void;
    label: string;
    min?: number;
    max?: number;
    step?: number;
}

const ValueInput = ({
    value,
    setValue,
    label,
    min,
    max,
    step,
}: ValueInputProps) => {
    const handleBlur = () => {
        if (!value) {
            setValue(0);
        } else if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === "" ? 0 : Number(event.target.value));
    };

    return (
        <Box sx={{ width: 250, marginTop: 2, marginLeft: 2 }}>
            <Typography id={`${label}-slider`} variant="body2">
                {label}
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        min={min}
                        max={max}
                        size="small"
                        step={step}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        sx={{ marginTop: 1, marginLeft: 1 }}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: step,
                            min: min,
                            max: max,
                            type: "number",
                            "aria-labelledby": "input-slider",
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export const MemoizedValueInput = React.memo(ValueInput);

export default ValueInput;
