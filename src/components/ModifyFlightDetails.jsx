import { ArrowRight } from "lucide-react"; // for arrow icon
import { useContext, useState } from "react";
import FlightSearch from "./FlightSearch";
import { Wrapper } from "../context/flightContext";

export default function ModifyFlightDetails() {
  const [open, setOpen] = useState(false);
  // const {IsRemoveButVis,setIsRemoveButVis}= useContext(Wrapper);
  function removeHandler(){

    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true); 
  }
 
  const flightDetails = {
    fromCode: "DEL",
    fromCity: "Delhi",
    toCode: "BOM",
    toCity: "Mumbai",
    departure: "26 Sep, 2025 , Friday",
    travellers: 1,
    travelClass: "Economy",
  };

  return (
    <>
      <div className="hidden md:flex justify-between items-center bg-white shadow-md  rounded-md px-6 py-4">
        {/* Route */}
        <div className="flex items-center gap-6">
          {/* From */}
          <div>
            <p className="font-bold text-lg">{flightDetails.fromCode}</p>
            <p className="text-sm text-gray-600">{flightDetails.fromCity}</p>
          </div>

          <ArrowRight className="w-5 h-5 text-gray-700" />

          {/* To */}
          <div>
            <p className="font-bold text-lg">{flightDetails.toCode}</p>
            <p className="text-sm text-gray-600">{flightDetails.toCity}</p>
          </div>

          {/* Departure */}
          <div>
            <p className="font-bold">Departure</p>
            <p className="text-sm text-gray-600">{flightDetails.departure}</p>
          </div>

          {/* Travellers */}
          <div>
            <p className="font-bold">Travellers</p>
            <p className="text-sm text-gray-600">{flightDetails.travellers}</p>
          </div>

          {/* Travel Class */}
          <div>
            <p className="font-bold">Travel Class</p>
            <p className="text-sm text-gray-600">{flightDetails.travelClass}</p>
          </div>
        </div>

        {/* Modify Button */}
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={removeHandler}
        >
          Modify
        </button>
      </div>

      {open  && <div className="fixed inset-0 bg-black/50 z-[10000] transition-opacity duration-300 flex justify-center items-center">
            <div className="w-[85%] bg-white rounded-md shadow-lg">
              <FlightSearch showRemove={true} removeHandler={removeHandler}></FlightSearch>

            </div>
            
        </div>}
    </>
  );
}
