import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReviewTitle({ onBack }) {
  const navigate= useNavigate();
  function backToSearch(){
    navigate('/details');

  }
  return (
    <div className="bg-gray-50   px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-900">
        Review Your Flight Details
      </h1>

      {/* Back Link */}
      <button
        onClick={backToSearch}
        className="flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 cursor-pointer"
        
      >
        <ChevronLeft className="w-4 h-4" />
        Back To Search
      </button>
    </div>
  );
}
