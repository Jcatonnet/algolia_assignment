import React, { useState, useEffect } from "react";
import { useRange } from "react-instantsearch";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface RangeSliderProps {
  attribute: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ attribute }) => {
  const { start, range, canRefine, refine } = useRange({ attribute });

  const safeMin = range.min ?? 0;
  const safeMax = range.max ?? 100;

  const [sliderValue, setSliderValue] = useState<[number, number]>([
    safeMin,
    safeMax,
  ]);

  useEffect(() => {
    if (typeof safeMin === "number" && typeof safeMax === "number") {
      setSliderValue([
        Math.max(safeMin, start[0] ?? safeMin),
        Math.min(safeMax, start[1] ?? safeMax),
      ]);
    }
  }, [start, safeMin, safeMax]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as [number, number]);
    refine(newValue as [number, number]);
  };

  return (
    <Box sx={{ width: 300, padding: 2 }}>
      <Typography gutterBottom>Health points:</Typography>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={safeMin}
        max={safeMax}
        disabled={!canRefine}
        color="secondary"
      />
    </Box>
  );
};

export default RangeSlider;
