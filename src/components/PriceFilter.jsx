
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function PriceFilter() {
  const [range, setRange] = useState([5000, 25000]);

  return (
    <div className="p-4 rounded-lg bg-white shadow-sm w-full">
      

      <Slider
        range
        min={4700}
        max={30000}
        value={range}
        onChange={setRange}
        trackStyle={[{ backgroundColor: "blue", height: 6 }]}
        handleStyle={[
          {
            borderColor: "black",
            height: 20,
            width: 20,
            marginTop: -7, // 👈 centers the handle
            backgroundColor: "white",
          },
          {
            borderColor: "black",
            height: 20,
            width: 20,
            marginTop: -7, // 👈 same fix for right handle
            backgroundColor: "white",
          },
        ]}
        railStyle={{ backgroundColor: "#ccc", height: 6 }}
      />

      <div className="flex justify-between text-sm font-bold mt-4">
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>
    </div>
  );
}
