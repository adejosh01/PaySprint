import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import VirtualCard1 from "../../../public/image/VirtualCard1.png";
import VirtualCard2 from "../../../public/image/VirtualCard2.png";
import WalletTransValue from "./WalletTransTable/WalletTransValue";
import ScrollButton from "@/Components/Utils/ScrollButton";

function WalletTrans() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-2 ml-6 md:ml-0 ">
      {/*Left */}
      <div className="flex items-center mt-16">
        <div className="mt-2">
          <h1 className="font-md text-xl w-full text-[#272343]">
            Recent transactions
          </h1>

          <div className="w-full  md:w-[680px] md:h-[310px] mb-14 border-[0.5px] mt-4 rounded-md">
            <div className="m-6">
              <div>
                <div className="flex justify-between pb-4 border-b-[0.5px]">
                  <div className="flex items-center border-[0.5px] w-16 h-8 rounded-md p-2">
                    <h1 className="mr-2 text-gray-400">All</h1>
                    <ChevronDownIcon className="text-gray-400" />
                  </div>

                  <div className="flex space-x-2 items-center border-[0.5px] w-48 h-8 rounded-md p-2">
                    <ChevronDownIcon className="text-gray-400 w-14 h-8" />
                    <h1 className="mr-2 text-gray-400 text-xs w-[800px]">
                      Filter by data range
                    </h1>
                  </div>

                  <div className="flex border-[0.5px] rounded-md h-8">
                    <SearchIcon className=" h-8 w-6 ml-2 text-gray-400" />
                    <div className="flex relative mr-12 justify-between">
                      <input
                        type="text"
                        placeholder="Search transaction"
                        className="w-18 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*TransTable for OverView Page */}
              <WalletTransValue />

              <ScrollButton />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-5 md:mt-[109px] space-y-2">
        {/*Quick Wallet Set Up */}

        <div>
          <h2 className="text-[20px]">Virtual Cards</h2>
          <p className="text-gray-400 text-[14px]">
            Request for your dollar cards
          </p>
        </div>
        <div>
          <Image src={VirtualCard1} alt="card" width={328} height={216} />
        </div>

        <div className="md:inline-flex items-center mt-80">
          <button className="flex justify-center text-[14px] font-bold p-[12px] w-[328px] h-[40px] bg-[#7165E3] text-white rounded-md">
            Get Virtual Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletTrans;
