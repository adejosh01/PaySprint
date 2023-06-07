import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
function Dropdown2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}>
        <ChevronDownIcon className="flex items-center h-5 w-5" />
      </button>
      {isOpen &&
        <div className="absolute right-0 mt-32 w-[251px] h-[68px] bg-white border border-gray-300 rounded shadow">
          <ul className="py-2">
            <li className="px-4 py-2 text-[14px] font-semibold">PS Account No: 20983</li>
          </ul>
        </div>}
    </div>
  );
}

export default Dropdown2;
