import React from "react";
import { Plane, Clock } from "lucide-react";
import { IoAirplaneSharp } from "react-icons/io5";
import indigo from "../../assets/images/indigo.png";

export default function SingleFlightCard() {
  return (
    <div className="flex-1  shadow-lg p-2  bg-[#fff]">
        <div className="flex justify-between items-center bg-[#f5f6f8] p-3 rounded-md">
      {/* Left Text Section */}
      <div>
        <h2 className="text-sm font-bold text-gray-900">
          RETURN <span className="font-normal">Mumbai → Delhi</span>
        </h2>
        <p className="text-xs text-gray-700">
          Mumbai | 0 Stops | 2 H 5 M
        </p>
      </div>

      {/* Right Button */}
      <button className="bg-[#f46a1f] hover:bg-[#d95d18] text-white text-xs font-bold px-4 py-1 rounded-md">
        Fare Rules
      </button>
    </div>
      {/* Flight Row */}
      <div className="flex flex-col md:flex-row justify-between   gap-1 gap-x-4">
        {/* Airline + Flight No */}
        <div className="flex items-center gap-3 ">
          <img src={indigo} alt="Indigo" className="w-10 h-10" />
          <div>
            <p className="text-gray-800 font-bold">Indigo</p>
            <p className="text-xs text-gray-500">6E - 656</p>
          </div>
        </div>

        {/* Departure */}
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold text-gray-900">05:00</p>
            <p className="text-sm text-gray-700">29 Sep</p>
            <p className="text-sm font-medium">
              Mumbai <span className="font-bold">[BOM]</span>
            </p>
            <p className="text-xs text-gray-500">Chhatrapati Shivaji</p>
          </div>

          {/* Duration */}
          <div className="flex flex-col items-center my-auto">
            
            <div className="border-t border-dotted border-red-400 relative w-[140px] flex justify-center">
                 <p className="text-sm font-bold text-gray-700 mb-1 my-[-30px]">2 h 5 m</p>
                 <IoAirplaneSharp className="w-5 h-5 text-gray-600 absolute top-[-10px] "></IoAirplaneSharp>
            </div>

           
          </div>

          {/* Arrival */}
          <div className="flex flex-col justify-between text-right">
         
            <p className="text-xl font-bold text-gray-900">07:05</p>
            <p className="text-sm text-gray-700">29 Sep</p>
            <p className="text-sm font-medium">
              Delhi <span className="font-bold">[DEL]</span>
            </p>
            <p className="text-xs text-gray-500">Delhi Indira Gandhi Intl</p>
          </div>
        </div>
        <div className="flex flex-col  gap-1 text-gray-600 mt-1 text-xs">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-bold ">2 h 5 m</span>
          <p className="text-xs text-green-600 font-medium">
            Economy · Refundable
          </p>
        </div>
      </div>

      {/* Baggage + Fare Info */}
      <div className=" pt-3 text-sm text-gray-700">
        <p className="mb-1">
          🧳 <span className="font-semibold">(Adult)</span> Check-In: 15 KG,
          Child: 7 KG, Infant: 7 KG
        </p>
        <p className="text-sm text-right">
          <span className="font-bold">Fare Class:</span> T &nbsp;|&nbsp;
          <span className="font-bold">Aircraft:</span> 321
        </p>
      </div>
    </div>
  );
}
