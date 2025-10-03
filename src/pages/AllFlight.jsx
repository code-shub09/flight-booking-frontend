import React, { useState } from "react";
import FlightCard from "../components/FlightCard";
import FlightFilterSidebar from "../components/FlightFilterSidebar";
import ModifyFlightDetails from "../components/ModifyFlightDetails";
import ModifyOnMobile from "../components/ModifyOnMobile";
import SummaryFlightDetails from "../components/SummaryFlightDetails";
import ListFlights from "../components/ListFlights";
import Summary from "../components/Summary";

const AllFlight = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div >
      <div className="w-[95%] mx-auto mb-4 shadow-md">
        <div className="sticky top-[30px]">
            <ModifyFlightDetails></ModifyFlightDetails>
        </div>
      
        <ModifyOnMobile setIsFilter={setIsFilter}></ModifyOnMobile>
      </div>
      <div className="w-full lg:w-[95%] mx-auto flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="hidden lg:block   lg:overflow-auto lg:w-[24%] shadow-xl/30">
          <FlightFilterSidebar></FlightFilterSidebar>
        </div>

        <div className="flex flex-col  lg:flex-col-reverse  w-full lg:w-[71%] bg-gray-50">
          
            
            {/* all flight available scroll bar */}
            <ListFlights></ListFlights>
            <div className="bg-black sticky bottom-0 lg:static mt-4">

                 <Summary></Summary>
                
            </div>
        
        
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-999 transition-opacity duration-300  ${
          isFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsFilter(false)}
      ></div>
      <div
        className={`fixed bg-white h-full w-[50%] z-[9999] top-0 left-0 toggleX z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto duration-600 ${
          isFilter ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FlightFilterSidebar></FlightFilterSidebar>
      </div>
    </div>
  );
};

export default AllFlight;
