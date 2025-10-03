import React from "react";
import SummaryFlightDetails from "./SummaryFlightDetails";
import { useNavigate } from "react-router-dom";

const Summary = () => {
 const navigate= useNavigate();
  function bookHandler(){
    navigate('/review')
  }

  return (
    <>
      <div className="flex bg-black text-white justify-between rounded-md shadow-xl/30 p-1 pr-2 ">
        <div className="flex flex-col justify-between lg:flex-row  ">
          <SummaryFlightDetails></SummaryFlightDetails>
          <SummaryFlightDetails></SummaryFlightDetails>
        </div>

        <div className="flex flex-col justify-around ">
          <span className="font-bold text-lg"> &#8377; 11020</span>
          <button className=" bg-orange-500 text-white h-12 w-16 lg:w-32 rounded-md cursor-pointer" onClick={bookHandler}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Summary;
