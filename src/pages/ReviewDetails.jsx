import React from "react";
import ReviewFlight from "../components/ReviewDetailsComp/ReviewFlight";
import ReviewFair from "../components/ReviewDetailsComp/ReviewFair";
import ReviewConfirmButton from "../components/ReviewDetailsComp/ReviewConfirmButton";

const ReviewDetails = () => {
  return (
    <div className="w-[96%] md:w-[93%] mx-auto bg-[#f5f6f8]">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row  gap-3 justify-between flex-1">
          <ReviewFlight></ReviewFlight>

          <ReviewFair></ReviewFair>
         
        </div>
       
      </div>
      <ReviewConfirmButton></ReviewConfirmButton>
    </div>
  );
};

export default ReviewDetails;
