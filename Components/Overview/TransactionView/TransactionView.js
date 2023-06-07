import {
  ChevronDownIcon,
  SearchIcon,
  ChevronRightIcon
} from "@heroicons/react/outline";
import TransTableView from "./TransTable/TransTableView";
import { ArrowRightIcon } from "@heroicons/react/solid";

function TransactionView() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-2 ml-6 md:ml-0 ">
      {/* Left */}
      <div className="flex items-center mt-4">
        <div className="mt-2">
          <h1 className="font-md text-xl w-full mb-4 text-[#272343]">
            Recent transactions
          </h1>

          <div className="w-full  md:w-[680px] md:h-[405px] border-[0.5px] mt-6 rounded-md">
            <div className="m-6">
              <div>
                <div className="flex justify-between pb-4 border-b-[0.5px]">
                  <div className="flex items-center border-[0.5px] w-16 h-8 rounded-md p-2">
                    <h1 className="mr-2 text-gray-400">All</h1>
                    <ChevronDownIcon className="text-gray-400" />
                  </div>
                  <div className="flex border-[0.5px] rounded-md h-8">
                    <SearchIcon className=" h-8 w-6 ml-2 text-gray-400" />
                    <div className="flex relative mr-12 justify-between">
                      <input
                        type="text"
                        placeholder="Search transactions"
                        className="w-18 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*TransTable for OverView Page */}
              <TransTableView />


            </div>
          </div>
        </div>
      </div>

      {/*Right */}

      <div className="mt-4">
        <div className="flex justify-center p-2 h-[45px] w-[328px] bg-[#272343] text-white rounded-md">
          <h1>Redeem Points</h1>
          <ArrowRightIcon className="ml-4 h-6 w-6" />
        </div>
        <div>
          <div className=" border-[0.5px] mt-4 h-[168px] rounded-md">
            <div className="m-6">
              <h1 className=" text-[14px] text-[#272343] font-semibold">
                PaySprint E-store
              </h1>
              <p className="text-[14px] text-gray-400 py-2 ">
                Shop with ease on paysprint E-store
              </p>
              <div className="flex bg-[#D2D2D2] shadow-sm w-[250px] h-[48px] mt-3 rounded-lg">
                <span className="px-14 py-2 text-gray-50 w-full">
                  Visit a store
                </span>
                <ArrowRightIcon className="bg-[#272343] text-white w-[48px] h-[48px] p-2 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
        {/*Quick Wallet Set Up */}

        <div>
          <div className="border-[0.5px] mt-4 h-[220px] rounded-md">
            <div className="m-4">
              <h1 className="text-[18px] text-[#272343] font-semibold">
                Quick wallet set-up
              </h1>

              <div className="mt-4 space-y-3">
                <div className="flex-container">
                  <p className="paragraph"> 
                    Identity Verification
                  </p>
                  <span className="text-[10px] text-[#B58400] bg-[#f9f2dd] w-[60px] h-[23px] p-1 rounded-full px-2">
                    Pending
                  </span>
                </div>
                <div className="flex-container">
                  <p className="paragraph">
                    Add card/ Bank account
                  </p>
                  <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                    Completed
                  </span>
                </div>
                <div className="flex-container">
                  <p className="paragraph">
                    Set transaction pin
                  </p>
                  <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                    Completed
                  </span>
                </div>
                <div className="flex-container">
                  <p className="paragraph">
                    Set transaction pin
                  </p>
                  <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                    Completed
                  </span>
                </div>
                <div className="flex-container">
                  <p className="paragraph">
                    Bank verification (BVN)
                  </p>
                  <span className="text-[10px] text-[#B58400] bg-[#f9f2dd] w-[60px] h-[23px] p-1 rounded-full px-2">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionView;
