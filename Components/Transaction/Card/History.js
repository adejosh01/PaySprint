import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@heroicons/react/outline";
import { BiNote } from "react-icons/bi";
import { ChevronDownIcon } from "@heroicons/react/solid";

function History() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const handleStateDate = date => {
    setSelectedStartDate(date);
  };

  const [selectedEndDate, setSelectedEndDate] = useState(null)

  const handleEndDate = date => {
    setSelectedEndDate(date);
  };

  return (
    <div className="flex flex-col space-y-2 md:flex-row ml-4 md:ml-0 md:items-center mt-4 justify-between">
      <div className="flex items-center space-x-8">
        <div className="md:inline-flex items-center w-[220px] h-[48px] p-[12px] border-[0.5px] rounded-md ">
          <button className="text-gray-400">
            <div className="flex items-center space-x-32">
              <span>Select</span>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex md:inline-flex items-center">
          <DatePicker
            selected={selectedStartDate}
            onChange={handleStateDate}
            dateFormat="dd/MM/yyyy"
            className="relative p-[12px] w-[220px] border-[0.5px] border-gray-300 rounded-md outline-none"
            placeholderText="Start Date"
          />
          <CalendarIcon className="absolute h-6 w-6 ml-44 text-gray-400 " />
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex md:inline-flex items-center">
          <DatePicker
            selected={selectedEndDate}
            onChange={handleEndDate}
            dateFormat="dd/MM/yyyy"
            className="relative p-[12px] w-[220px] border-[0.5px] border-gray-300 rounded-md outline-none"
            placeholderText="End Date"
          />
          <CalendarIcon className="absolute h-6 w-6 ml-44 text-gray-400 " />
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="md:inline-flex items-center justify-center w-[220px] h-[48px] p-[12px] border-[0.5px] rounded-md bg-[#E7AA07] ">
          <button className="flex items-center space-x-2 text-white ">
            <span>Generate report</span>
            <BiNote className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;
