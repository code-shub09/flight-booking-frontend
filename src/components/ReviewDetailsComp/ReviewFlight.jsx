import React from "react";
import ReviewTitle from "./ReviewTitle";
import ReviewFlightCard from "./ReviewFlightCard";
import SingleFlightCard from "./SingleFlightCard";

const ReviewFlight = () => {
  return (
    <div className="flex flex-col flex-1 md:flex-[3] gap-y-3">
      <ReviewTitle></ReviewTitle>
      
      <SingleFlightCard></SingleFlightCard>
      <SingleFlightCard></SingleFlightCard>
    </div>
  );
};

export default ReviewFlight;
