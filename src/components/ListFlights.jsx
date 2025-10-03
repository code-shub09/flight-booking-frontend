import React from "react";
import FlightCard from "./FlightCard";
import indigo from "../assets/images/indigo.png";
import spicejet from "../assets/images/spicejet.png";

const ListFlights = () => {
  return (
    <div className="p-2">
      <div className="w-full  flex  justify-between">
        <div>DEL -- Mum</div>
        <div>Mum ---del </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flightX  flex flex-col justify-between  grow max-w-[48%] gap-y-4">
          <FlightCard flightlogo={indigo}></FlightCard>
          <FlightCard flightlogo={spicejet}></FlightCard>
          <FlightCard flightlogo={spicejet}></FlightCard>
          <FlightCard flightlogo={indigo}></FlightCard>
          <FlightCard flightlogo={indigo}></FlightCard>
          <FlightCard flightlogo={spicejet}></FlightCard>
        </div>
        <div className="returnFlight   grow max-w-[48%]">
          {" "}
          <FlightCard flightlogo={indigo}></FlightCard>
          <FlightCard flightlogo={indigo}></FlightCard>
          <FlightCard flightlogo={spicejet}></FlightCard>
          <FlightCard flightlogo={spicejet}></FlightCard>
        </div>
      </div>
    </div>
  );
};

export default ListFlights;
