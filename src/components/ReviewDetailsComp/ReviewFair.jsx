import React from 'react'
import FareSummary from './FareSummary'

const ReviewFair = () => {
  return (
  <div className="flex flex-col gap-4 flex-1 ">
      <FareSummary title="Onward Fare Summary" baseFare={4818} taxes={875} total={5693} />
      <FareSummary title="Return Fare Summary" baseFare={3795} taxes={804} total={4599} />
    </div>
  )
}

export default ReviewFair
