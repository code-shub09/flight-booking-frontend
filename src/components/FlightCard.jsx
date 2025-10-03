
import { useState } from "react";
import indigo from '../assets/images/indigo.png'

export default function FlightCard({flightlogo}) {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("flight");

  // Example data (2 flights → 1 stop)
  const flights = [
    {
      from: "Mumbai (BOM)",
      timeFrom: "07:25",
      dateFrom: "Tue, Sep 30",
      airportFrom: "Chhatrapati Shivaji Maharaj Intl",
      to: "Indore (IDR)",
      timeTo: "09:00",
      dateTo: "Tue, Sep 30",
      airportTo: "Devi Ahilyabai Holkar Intl",
      duration: "01h 35m",
      airline: "IndiGo",
      flightNo: "6E-2153",
      terminal: "T1",
      baggage: { checkIn: "15 KG", cabin: "7 KG" },
    },
    {
      from: "Indore (IDR)",
      timeFrom: "09:40",
      dateFrom: "Tue, Sep 30",
      airportFrom: "Devi Ahilyabai Holkar Intl",
      to: "New Delhi (DEL)",
      timeTo: "11:15",
      dateTo: "Tue, Sep 30",
      airportTo: "Indira Gandhi Intl",
      duration: "01h 35m",
      airline: "IndiGo",
      flightNo: "6E-0803",
      terminal: "T3",
      baggage: { checkIn: "15 KG", cabin: "7 KG" },
    },
  ];

  return (
    <div className="max-w-lg border border-gray-200  shadow-sm p-[2px] md:p-4 bg-white">
      {/* Top summary */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={flightlogo}
            alt="IndiGo"
            className="w-8 h-8"
          />
          <span className="font-medium text-gray-700">IndiGo</span>
        </div>
        <div className="text-lg font-semibold text-green-600">₹4714</div>
      </div>

      {/* Summary flight row */}
      <div className="flex items-center justify-between mt-3">
        <div className="text-center">
          <p className="text-sm md:text-xl font-bold">07:25 BOM</p>
          <p className="text-sm text-gray-600">Mumbai</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-700">3h 50m</p>
          <p className="text-xs text-gray-500">
            {flights.length > 1 ? "1 Stop" : "Non Stop"}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-xl font-bold">11:15 DEL</p>
          <p className="text-sm text-gray-600">New Delhi</p>
        </div>
      </div>

      {/* Expand toggle */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
        <span>Economy</span>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-600 hover:underline"
        >
          {showDetails ? "Hide Details ▲" : "Flight Detail ▼"}
        </button>
      </div>

      {/* Details Section */}
      {showDetails && (
        <div className="mt-4 border-t pt-3">
          {/* Tabs */}
          <div className="flex gap-2 border-b pb-2 text-[10px] md:text-sm font-medium">
            {["flight", "baggage", "fare", "cancellation"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab === "flight" && "Flight"}
                {tab === "baggage" && "Baggage"}
                {tab === "fare" && "Fare"}
                {tab === "cancellation" && "Cancellation"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-3">
            {activeTab === "flight" && (
              <div className="space-y-4">
                {flights.map((f, i) => (
                  <div
                    key={i}
                    className="border-b pb-3 last:border-none text-sm text-gray-700"
                  >
                    <div className="flex  gap-x-1">
                      <div className="w-[60%]">
                        <p className="font-normal text-[10px] md:font-bold ">{f.from}</p>
                        <p className="text-md font-semibold">{f.timeFrom}</p>
                        <p className="text-xs text-gray-500">{f.dateFrom}</p>
                        <p className=" text-[10px] md:text-xs text-gray-500 whitespace-nowrap truncate w-16 hover:whitespace-normal hover:overflow-visible hover:text-clip">{f.airportFrom}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[12px] text-gray-500 font-semibold">{f.duration}</p>
                        <p className="text-[12px] text-gray-500">Eco</p>
                      </div>
                      <div className="pl-[4px]">
                        <p className="font-normal text-[10px] md:font-bold whitespace-nowrap truncate w-14 hover:whitespace-normal hover:overflow-visible hover:text-clip">{f.to}</p>
                        <p className="text-md font-semibold">{f.timeTo}</p>
                        <p className="text-xs text-gray-500">{f.dateTo}</p>
                        <p className="text-[10px] text-gray-500 whitespace-nowrap truncate w-16 hover:whitespace-normal hover:overflow-visible hover:text-clip">{f.airportTo}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {f.airline} • {f.flightNo} • Term*: {f.terminal}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "baggage" && (
              <div className="space-y-3 text-sm">
                <h3 className="font-semibold">Baggage Rules</h3>
                {flights.map((f, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-2 last:border-none"
                  >
                    <span className="text-blue-600 font-medium">{f.flightNo}</span>
                    <span>Check-in: {f.baggage.checkIn}</span>
                    <span>Cabin: {f.baggage.cabin}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "fare" && (
              <div className="text-sm text-gray-700">
                <p>Base Fare: ₹4000</p>
                <p>Taxes & Fees: ₹714</p>
                <p>Total: ₹4714</p>
              </div>
            )}

            {activeTab === "cancellation" && (
              <div className="text-sm text-gray-700">
                <p>• Free cancellation within 24 hours of booking</p>
                <p>• After 24 hours: ₹2500 cancellation fee</p>
                <p>• No-show: Non-refundable</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
