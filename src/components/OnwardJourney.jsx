import React from 'react'

const OnwardJourney = () => {
  return (
    <div className='p-3'>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium"> Onward Journey </span>

          <span className="text-red-500 text-xs cursor-pointer">reset</span>
        </div>

        {/* Expandable content */}

        <div className="mt-3 space-y-4">
          {/* Depart section */}
          <div>
            <p className="text-gray-700 font-medium mb-2">
              ✈ Depart from New Delhi (DEL)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Before 6AM", "6AM - 12PM", "12PM - 6PM", "After 6PM"].map(
                (label, i) => (
                  <button
                    key={i}
                    className="border rounded-lg py-2 px-3 flex flex-col items-center hover:bg-blue-50"
                  >
                    <span className="text-lg">☀️</span>
                    <span className="text-xs">{label}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Arrive section */}
          <div>
            <p className="text-gray-700 font-medium mb-2">
              ✈ Arrive at Mumbai (BOM)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Before 6AM", "6AM - 12PM", "12PM - 6PM", "After 6PM"].map(
                (label, i) => (
                  <button
                    key={i}
                    className="border rounded-lg py-2 px-3 flex flex-col items-center hover:bg-blue-50"
                  >
                    <span className="text-lg">🌙</span>
                    <span className="text-xs">{label}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default OnwardJourney
