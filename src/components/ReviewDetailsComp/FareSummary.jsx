import React from "react";

export default function FareSummary({ title, baseFare, taxes, total }) {
  return (
    <div className="bg-white shadow-sm p-4 min-w-fit ">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Fare Details */}
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Base Fare</span>
          <span>₹ {baseFare}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹ {taxes}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Charges</span>
          <span>₹ 0</span>
        </div>
        <div className="flex justify-between">
          <span>GST (+)</span>
          <span>₹ 0</span>
        </div>
        <div className="flex justify-between">
          <span>Meal (+)</span>
          <span>₹ 0</span>
        </div>
        <div className="flex justify-between">
          <span>Baggage (+)</span>
          <span>₹ 0</span>
        </div>
        <div className="flex justify-between">
          <span>Seat (+)</span>
          <span>₹ 0</span>
        </div>
      </div>

      {/* Divider + Pay Amount */}
      <div className="border-t mt-3 pt-3 flex justify-between items-center font-semibold">
        <span>Pay Amount</span>
        <span className="text-gray-900">₹ {total}</span>
      </div>
    </div>
  );
}
