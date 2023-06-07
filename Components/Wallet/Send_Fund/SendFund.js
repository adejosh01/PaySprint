

function SendFund() {
    return(
        <div className="flex items-center justify-between space-x-2 md:space-x-96">
      {/*Send Fund */}
      <div className="flex flex-grow ml-6 md:ml-0">
        <div className="flex">
          <h1 className="font-md text-md text-gray-400 w-[245px] ">
          Send and receive funds with ease
          </h1>
        </div>
      </div>

      {/* Verification */}
      <div className="flex items-center space-x-8">
        <div className="hidden md:inline-flex items-center">
          <button className="flex justify-center p-[12px] w-[328px] h-[48px] bg-[#FF5141] text-white rounded-md">
            Request refund
          </button>
        </div>
      </div>
    </div>
    )
}


export default SendFund;