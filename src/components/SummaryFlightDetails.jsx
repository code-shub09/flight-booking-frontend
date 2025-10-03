// import React from "react";
// import indigo from '../assets/images/indigo.png'
// export default function SummaryFlightDetails() {
//   return (
//     <div className="flex items-center justify-between  rounded-md shadow-sm lg:px-4 lg:py-3 gap-4  ">
//       {/* Airline Logo + Name */}
//       <div className="flex flex-col items-center w-full">
//         <img
//           src={indigo}
//           alt="IndiGo"
//           className="w-8 h-8 object-contain"
//         />
//         <p className="text-xs mt-1 text-gray-700">IndiGo</p>
//       </div>

//       {/* Departure */}
//       <div className="flex flex-col items-center">
//         <p className="text-lg font-semibold">19:45</p>
//         <p className="text-sm text-gray-600">BOM</p>
//       </div>

//       {/* Duration + Stops */}
//       <div className="flex flex-col items-center w-24">
//         <p className="text-xs font-medium text-gray-600 whitespace-nowrap">4h 20m</p>
//         <div className="relative w-full flex items-center">
//           <div className="border-t border-gray-400 w-full"></div>
//           <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full border border-orange-500 w-2 h-2"></div>
//         </div>
//         <p className="text-xs text-gray-500 mt-1 whitespace-nowrap">1 stop</p>
//       </div>

//       {/* Arrival */}
//       <div className="flex flex-col items-center">
//         <p className="text-lg font-semibold whitespace-nowrap">00:05</p>
//         <p className="text-sm text-gray-600">BLR</p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import indigo from "../assets/images/indigo.png";

export default function SummaryFlightDetails() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-sm lg:px-4 lg:py-3 gap-6">
      {/* Airline Logo + Name */}
      <div className="flex flex-col items-center flex-shrink-0">
        <img
          src={indigo}
          alt="IndiGo"
          className="w-8 h-8 object-contain"
        />
        <p className="text-xs mt-1 text-gray-700">IndiGo</p>
      </div>

      {/* Departure */}
      <div className="flex flex-col items-center flex-shrink-0">
        <p className="text-lg font-semibold">19:45</p>
        <p className="text-sm text-gray-600">BOM</p>
      </div>

      {/* Duration + Stops */}
      <div className="flex flex-col items-center w-24 flex-shrink-0">
        <p className="text-xs font-medium text-gray-600 whitespace-nowrap">
          4h 20m
        </p>
        <div className="relative w-full flex items-center">
          <div className="border-t border-gray-400 w-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full border border-orange-500 w-2 h-2 z-50"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1 whitespace-nowrap">1 stop</p>
      </div>

      {/* Arrival */}
      <div className="flex flex-col items-center flex-shrink-0">
        <p className="text-lg font-semibold whitespace-nowrap">00:05</p>
        <p className="text-sm text-gray-600">BLR</p>
      </div>
    </div>
  );
}
