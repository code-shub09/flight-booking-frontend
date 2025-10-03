// import React from 'react'

import airplane from "../assets/images/homeImage.jpg";

import { useState } from "react";
import DateField from "../components/Datefield";
import ReasonsToBook from "../components/ReasonToBook";
import FlightSearch from "../components/FlightSearch";
import heroImg from "../assets/images/homeImage2.jpg";

export default function Home() {
  const [formData, setFormData] = useState({ from: "", to: "" });
  const [departure, setDeparture] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [tripType, setTripType] = useState("oneway"); // "oneway" | "roundtrip"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Data:", {
      ...formData,
      tripType,
      departure,
      returnDate: tripType === "roundtrip" ? returnDate : null,
    });
  };

  return (
    <>
      <div
        className="h-[400px] w-full bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute top-1/3 flex items-center justify-center   rounded-xl p-6 w-[100%] lg:w-[90%] ">
          <FlightSearch isRemoveButton={false} />
        </div>
      </div>

      <ReasonsToBook></ReasonsToBook>
    </>
  );
}

//  <div className="w-full">
//         <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
//           {/* Background */}
//           <img
//             src={airplane}
//             alt="Airplane"
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay text */}
//           <div className="absolute inset-0 flex flex-col items-center justify-start text-white bg-black/30 pt-20">
//             <h1 className="text-3xl sm:text-5xl font-bold text-center">
//               Best deals are waiting for you
//             </h1>
//           </div>

//           {/* Search Box */}
//         </div>
//       </div>
