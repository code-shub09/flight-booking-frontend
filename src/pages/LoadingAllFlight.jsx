import React, { useEffect } from "react";
import Lottie from "lottie-react";
import planeAnimation from "../assets/images/flightAnim.json"; // downloaded lottie file
import { useNavigate } from "react-router-dom";

const LoadingAllFlight = () => {
      const navigate = useNavigate();

  useEffect(() => {
    // run after mount
    const timer = setTimeout(() => {
      navigate("/details"); // 👈 redirect after 4 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);
  return (
    <div className="flex justify-center">
       <Lottie
            animationData={planeAnimation}
            loop={true}
            className="w-80 h-70"
          />
    </div>
  );
};

export default LoadingAllFlight;
