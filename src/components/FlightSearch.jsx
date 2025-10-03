import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { Wrapper } from "../context/flightContext";
import { useNavigate } from "react-router-dom";
export default function FlightSearch({ showRemove = false, removeHandler }) {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");
  const [departure, setDeparture] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [fareType, setFareType] = useState("regular");
  const [carrier, setCarrier] = useState("");
  const { IsRemoveButVis, setIsRemoveButVis } = useContext(Wrapper);

  const navigate = useNavigate();

  function searchHandler() {
    navigate("/loading");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = {
      tripType,
      from,
      to,
      departure: departure ? departure.toISOString().split("T")[0] : null,
      returnDate:
        tripType === "roundtrip" && returnDate
          ? returnDate.toISOString().split("T")[0]
          : null,
      travellers: 1,
      class: "Economy",
      fareType,
      carrier,
    };

    console.log("🔎 Flight Search Payload:", searchData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full  mx-auto mt-6  relative z-[9999]">
      {/* Tabs */}
      {showRemove && (
        <div
          className="absolute top-[8px] right-[8px] cursor-pointer"
          onClick={removeHandler}
        >
          <FaXmark size={24}></FaXmark>{" "}
        </div>
      )}
      <div className="flex justify-between w-full pt-8 ">
        <div className="flex gap-4  mb-6 ">
          {["oneway", "roundtrip", "multicity"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={removeHandler}
              className={`px-6 py-2 rounded-t-lg font-medium capitalize ${
                tripType === type
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type === "oneway"
                ? "Oneway"
                : type === "roundtrip"
                ? "Round Trip"
                : "Multi City"}
            </button>
          ))}
         
        </div>
          {!showRemove && (<div className="invisible md:visible text-xl font-extrabold">Book Flight Tickets</div>)}
         
      </div>

      {/* Heading */}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Labels Row */}
         

        {/* Values Row */}
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:flex-row justify-between gap-y-4 border-b  border-t border-gray-200 pb-4">
          {/* From */}

          <div className=" w-[45%] lg:w-[20%]  relative ">
            <label className="text-[12px] "> From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full font-extrabold text-lg focus:outline-none"
            />
            <p className="text-xs text-gray-500">
              [DEL] Indira Gandhi International
            </p>
            <div className="w-[10%] absolute top-[50%] right-[-13px] ">
              <BsArrowLeftRight
                size={26}
                style={{ strokeWidth: 1 }}
              ></BsArrowLeftRight>
            </div>
          </div>

          {/* To */}
          <div className="w-[45%] lg:w-[20%]  pl-[20px]">
            <label> TO</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full font-extrabold text-lg focus:outline-none"
            />
            <p className="text-xs text-gray-500">[BOM] Chhatrapati Shivaji</p>
          </div>

          {/* Departure */}
          <div className=" w-[45%] lg:w-[15%]  ">
            <label>
              {" "}
              <FaCalendarAlt className="inline-block align-middle mr-2 text-blue-600"></FaCalendarAlt>{" "}
              Depart<FiChevronDown className="inline-block "></FiChevronDown>{" "}
            </label>
            <br />
            <DatePicker
              selected={departure}
              onChange={(date) => setDeparture(date)}
              dateFormat="dd MMM yy"
              className="w-full border-none font-extrabold text-lg"
            />
            <p className="text-xs text-gray-500">
              {departure?.toLocaleDateString("en-US", { weekday: "long" })}
            </p>
          </div>

          {/* Return */}
          {tripType === "roundtrip" ? (
            <div className="border">
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd MMM yy"
                placeholderText="Book a round trip"
                className="w-full border-none font-semibold text-lg"
              />
            </div>
          ) : (
            <div className="w-[45%] lg:w-[12%]  pl-[20px] ">
              <label>
                <FaCalendarAlt className="inline-block align-middle mr-2 text-blue-600"></FaCalendarAlt>{" "}
                RETURN <FiChevronDown className="inline-block "></FiChevronDown>{" "}
              </label>
              <br />
              <div className="truncate"> Book round trip </div>
            </div>
          )}

          {/* Travellers & Class (Static) */}
          <div className=" text-sm  w-full lg:w-[13%] ">
            <label className="text-[13px] color-[#363636 font-extrabold]">
              TRAVELLER & CLASS
            </label>
            <br />
            <span className="font-bold text-3xl"> 1</span>{" "}
            <span> Traveller(s)</span>
            <p>Economy</p>
          </div>

          <div className="w-full lg:w-[12%] flex justify-center p-2 ">
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 w-full py-2 rounded-md font-medium hover:bg-blue-800 cursor-pointer"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
        </div>

        {/* Fare Type */}
        <div className="flex flex-wrap items-center  ">
          <p className="text-sm">Select A Fare Type</p>
          <div className="flex items-center  gap-6  text-sm mt-4 overflow-x-auto whitespace-nowrap">
            {[
              "Non-Stop",
              "Regular Fare",
              "Student Fares",
              "Marine Fares",
              "Senior Citizen",
            ].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fareType"
                  value={type}
                  checked={fareType === type.toLowerCase().replace(" ", "")}
                  onChange={() =>
                    setFareType(type.toLowerCase().replace(" ", ""))
                  }
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Carriers */}
      </form>
    </div>
  );
}
