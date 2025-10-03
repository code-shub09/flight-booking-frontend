import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import FlightSearch from "./FlightSearch";

const ModifyOnMobile = ({ setIsFilter }) => {
  function handleFilter() {
    setIsFilter(true);
  }

  const [open, setOpen] = useState(false);
  // const {IsRemoveButVis,setIsRemoveButVis}= useContext(Wrapper);
  function removeHandler() {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }
  return (
    <>
      <div className="flex flex-col items-center text-center shadow-md rounded-md gap-2 md:hidden">
        {/* From - To */}
        <div className="flex items-center gap-2 text-lg font-bold">
          <FaFilter onClick={handleFilter} />
          <span>DEL</span>
          <BsArrowRight />
          <span>BOM</span>
          <FaPen onClick={removeHandler} />
        </div>

        {/* Dates */}
        <div className="text-sm">
          26 Sep ’2025, Friday | 27 Sep ’2025, Saturday
        </div>

        {/* Travellers + Class */}
        <div className="text-sm">
          <span className="font-bold">1</span> Traveller | Economy
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 flex justify-center items-center">
          <div className="w-[92%]">
            <FlightSearch
              showRemove={true}
              removeHandler={removeHandler}
            ></FlightSearch>
          </div>
        </div>
      )}
    </>
  );
};

export default ModifyOnMobile;
