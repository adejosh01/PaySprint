import { ArrowRightIcon } from "@heroicons/react/solid";
import {TiInfoLarge} from 'react-icons/ti'

function Welcome() {
  return (
    <div className="flex items-center justify-between space-x-2 md:space-x-96">
      {/*User Welcome */}
      <div className="flex flex-grow ml-6 md:ml-0">
        <div className="flex">
          <h1 className="font-md text-xl text-[#272343] w-[154px] ">
            Welcome Joshua
          </h1>
        </div>
      </div>

      {/* Verification */}
      <div className="flex items-center space-x-8">
      
        <div className="flex items-center">
          <p className="hidden md:inline-flex items-center text-sm text-[#E7AA07] w-[300px]">
            <TiInfoLarge className="h-4 w-4 mr-2 border-[2px] rounded-full border-[#E7AA07]" />
            Please complete your verification process
          </p>
        </div>
        <div className="hidden md:inline-flex items-center">
          <button className="flex p-[15px] w-[199px] h-[55px] bg-[#00751F] text-white rounded-md">
            Withdraw funds
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
