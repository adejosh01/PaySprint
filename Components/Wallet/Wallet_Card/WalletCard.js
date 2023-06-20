import { PlusIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import {FaHandHoldingUsd} from 'react-icons/fa'
import {CiPaperplane} from 'react-icons/ci'

function WalletCard() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row ml-4 md:ml-0 md:items-center mt-4 justify-between">
      <div className="bg-white border-[0.5px] mb-16 md:mb-0  w-[328px] h-[120px] rounded-md">
        <div className="m-4 mb-6 md:mb-10">
          <h5 className="text-[16px] text-gray-400">Overdraft balance</h5>
          <div className="flex items-center space-x-24">
            <h2 className="mt-3 text-[32px] text-[#272343]">₦00,00</h2>
            <p className="mt-6 text-[10px] text-gray-400">
              limit <span className="text-gray-600">(#00.00)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="md:inline-flex items-center">
            <button className="flex justify-center text-[14px] font-bold p-[12px] w-[328px] h-[48px] bg-[#E7AA07] text-white rounded-md">
              Top up
              <PlusIcon className="h-6 w-6 ml-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-[0.5px] w-[328px] mb-16 md:mb-0  h-[120px] rounded-md ">
        <div className="m-4 mb-6 md:mb-10">
          <h5 className="text-[16px] text-gray-400 ">Available balance</h5>
          <div className="flex items-center space-x-24">
            <h2 className="mt-3 text-[32px] text-[#272343]">#00.00</h2>
            <p className="mt-6 text-[14px] text-[#FF5141]">2.34%</p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="md:inline-flex items-center">
            <button className="flex justify-center items-center text-[14px] font-bold p-[12px] w-[328px] h-[48px] bg-[#00751F] text-white rounded-md">
              Withdraw
              <FaHandHoldingUsd className="h-6 w-6 ml-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-[0.5px] mb-16 md:mb-0 w-[328px] h-[120px] rounded-md ">
        <div className="m-4 mb-6 md:mb-10">
          <h5 className="text-[16px] text-gray-400">Linked accounts</h5>
          <div className="flex">
            <h2 className="mt-3 border-[1px] w-[50px] h-[50px] rounded-full" />
            <h2 className="mt-3 border-[1px] w-[50px] h-[50px] rounded-full" />
          </div>
        </div>
        <div className="md:inline-flex items-center">
            <button className="flex justify-center text-[14px] font-bold p-[12px] w-[328px] h-[48px] bg-[#272343] text-white rounded-md">
              Send money
              <CiPaperplane className="h-6 w-6 ml-3" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
