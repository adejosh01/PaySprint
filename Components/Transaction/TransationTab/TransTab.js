import { BsArrowDownLeft } from "react-icons/bs";

function TransTab({ id, description, date, time, amount, status }) {
   
   
  return (
      <div className="flex justify-between items-center mt-2 pb-4 border-b-[0.5px]">
        <div>
          <div className="flex items-center space-x-2">
            <BsArrowDownLeft className="transicon h-3 w-3 text-[#00751F] bg-[#68D5851A]" />
            <div>{id}</div>
          </div>
        </div>
        <div>
          <p className="w-[193px] text-[12px] font-normal text-[#272343]">
            {description}
          </p>
        </div>
        <div className="mr-16">
          <div className="text-[#272343]">
            {date}
          </div>
          <span className="text-[14p] text-gray-300">
            {time}
          </span>
        </div>
        <div>
          <div className="mr-12">
            {amount}
          </div>
        </div>
        <div>
          <div className="text-[12px] mr-2 text-[#00751F] bg-[#f2f6f3]">
            {status}
          </div>
        </div>
      </div>
  );
}

export default TransTab;
