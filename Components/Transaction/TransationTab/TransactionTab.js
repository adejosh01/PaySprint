import TransTab from "./TransTab";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import ScrollButton from "@/Components/Utils/ScrollButton";
import { HiArrowDownTray } from "react-icons/hi2";

const transactionlists = [
  {
    id: "A0B1C004",
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000",
    status: "successful"
  },

  {
    id: "A0B1C004",
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000",
    status: "successful"
  },

  {
    id: "A0B1C004",
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000",
    status: "successful"
  },

  {
    id: "A0B1C004",
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000",
    status: "successful"
  }
];

function TransactionTab() {
  return (
    <div className="md:w-[1032px] md:h-[520px] border-[0.5px] mt-2 p-[24px] rounded-md">
      <div>
        <div className="flex flex-col md:flex-row justify-between pb-4 border-b-[0.5px] space-y-4 md:space-x-2">
          <div className="flex space-x-3 items-center border-[0.5px] h-8 rounded-md p-4 ml-0 md:mt-4 mr-6">
            <div className="flex w-24 text-gray-400 space-x-2">
              <span>Filter by</span>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </div>

          <div className="flex items-center border-[0.5px] rounded-md h-10 ">
            <SearchIcon className=" h-8 w-6 ml-2 text-gray-400" />
            <div className="flex relative ml-4 justify-between">
              <input
                type="text"
                placeholder="Search transaction"
                className="w-18 outline-none"
              />
            </div>
          </div>

          <div>
            <button className="flex justify-center text-sm p-5 items-center border-[0.5px] w-40 h-8 rounded-md md:ml-3 bg-[#272343] text-white">
              Top up
            </button>
          </div>

          <div>
            <button className="flex justify-center text-sm p-5 items-center border-[0.5px] w-40 h-8 rounded-md md:ml-16 text-gray-400">
              Disbursement
            </button>
          </div>

          <div className="flex items-center mt-4 md:mt-0 md:ml-14">
            <h1 className="flex items-center space-x-2 mt-4 md:mt-0  md:ml-12 text-sm w-[800px] text-[#7165E3]">
              <HiArrowDownTray className="w-5 h-5" />
              <span>Export report</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 pb-4 border-b-[0.5px]">
        <div>
          <h1 className="text-[14px] text-[#272343] font-semibold ml-6">ID</h1>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold">
            Description
          </h2>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold">Date</h2>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold">Amount</h2>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold mr-4">
            Status
          </h2>
        </div>
      </div>

      <div>
        {transactionlists.map(transactionlist =>
          <TransTab
            id={transactionlist.id}
            description={transactionlist.description}
            date={transactionlist.date}
            time={transactionlist.time}
            amount={transactionlist.amount}
            status={transactionlist.status}
          />
        )}
      </div>
      <div className="ml-36">
        <ScrollButton />
      </div>
    </div>
  );
}

export default TransactionTab;
