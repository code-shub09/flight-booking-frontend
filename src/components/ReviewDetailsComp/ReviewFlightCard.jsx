

import React from "react";
import { Plane, Info } from "lucide-react";

export default function ReviewFlightCard() {
  return (
    <div className=" bg-white shadow-md rounded-2xl p-6 border border-gray-200 flex-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            RETURN Mumbai → Delhi
          </h2>
          <p className="text-sm text-gray-600">
            Mumbai | 0 Stops | 2 H 5 M
          </p>
        </div>
        <button className="bg-orange-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-orange-600">
          Fare Rules
        </button>
      </div>

      {/* Flight Details */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-b py-4">
        {/* Airline & Departure */}
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/IndiGo_Airlines_logo.svg/1200px-IndiGo_Airlines_logo.svg.png"
            alt="Indigo"
            className="w-10 h-10"
          />
          <div>
            <p className="text-gray-800 font-semibold">Indigo</p>
            <p className="text-sm text-gray-500">6E - 656</p>
          </div>
        </div>

        {/* Departure Time */}
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">05:00</p>
          <p className="text-sm text-gray-600">29 Sep</p>
          <p className="text-sm text-gray-500">Mumbai [BOM]</p>
          <p className="text-xs text-gray-400">Chhatrapati Shivaji</p>
        </div>

        {/* Flight Duration */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-1">2 h 5 m</p>
          <Plane className="w-5 h-5 text-gray-600" />
        </div>

        {/* Arrival Time */}
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">07:05</p>
          <p className="text-sm text-gray-600">29 Sep</p>
          <p className="text-sm text-gray-500">Delhi [DEL]</p>
          <p className="text-xs text-gray-400">Indira Gandhi Intl</p>
        </div>
      </div>

      {/* Baggage + Fare Info */}
      <div className="mt-4 text-sm text-gray-700">
        <p className="mb-2">
          <span className="font-semibold">Baggage: </span>
          (Adult) Check-in 15 KG, Child 7 KG, Infant 7 KG
        </p>
        <div className="flex justify-between items-center">
          <p>
            <span className="font-semibold">Fare Class:</span> T
          </p>
          <p>
            <span className="font-semibold">Aircraft:</span> 321
          </p>
          <p className="text-green-600 font-medium">Economy · Refundable</p>
        </div>
      </div>
    </div>
  );
}

