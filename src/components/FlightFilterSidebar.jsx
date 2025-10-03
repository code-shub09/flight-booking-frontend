import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PriceFilter from "./PriceFilter";
import OnwardJourney from "./OnwardJourney";
// import { FaFilter } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';

export default function FlightFilterSidebar() {
  const [openSection, setOpenSection] = useState("onward");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="shadow-sm bg-white self-start  text-sm">
        {/* filter title */}
        <div className="flex justify-between ">
            <div className="font-bold text-lg flex justify-between item-start gap-2"> <FaFilter className="h-full "> </FaFilter> <span>Filter Results</span></div>
            <div>Reset All</div>

        </div>
      {/* Stops */}
      <div className="flex flex-col h-[120px]  p-3">
        <div className=" py-3 flex justify-between items-center">
          <span className="text-lg font-medium"> Stops </span>

          <span className="text-red-500 text-xs cursor-pointer">reset</span>
        </div>
        <div className="flex flex-col flex-wrap  justify-around h-[80%]">
          <label className="flex items-center gap-2">
            <input type="radio" name="stops" />
            Non Stop
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="stops" />1 Stop
          </label>
        </div>
      </div>

      {/* Airlines */}
      <div className="border-b">
        <div className="  flex justify-between items-center p-3">
          <span className="text-lg font-medium">Airlines </span>

          <span className="text-red-500 text-xs cursor-pointer">reset</span>
        </div>
        <div className="flex flex-col  gap-2  text-sm p-3">
          {[
            "Air India",
            "Air India Express",
            "Luftansa",
            "Indigo",
            "SpiceJet",
          ].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="radio" name="Airline" value={type} />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="border-b ">
        <div className="p-3 flex justify-between items-center">
         
          <span className="text-lg font-medium"> Price{" "}</span>
          <span className="text-red-500 text-xs cursor-pointer">reset</span>
           
        </div>
        <PriceFilter></PriceFilter>
       
      </div>

      {/* Onward Journey */}
      <div className="py-3 border-b">

        <OnwardJourney></OnwardJourney>
        
      </div>
    </div>
  );
}
