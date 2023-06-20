function WalletTransValue() {
  return (
    <div>
      <div className="flex justify-between items-center mt-2 pb-2 border-b-[0.5px]">
        <div>
          <h1 className="text-[14px] text-[#272343] font-semibold">
            Description
          </h1>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold">Date</h2>
        </div>
        <div>
          <h2 className="text-[14px] text-[#272343] font-semibold mr-4">
            Amount
          </h2>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 pb-2 border-b-[0.5px]">
            <div>
                <p className="w-[193px] text-[12px] font-normal text-[#272343]">
                  Received NGN 30,000 in wallet for 
                  intern - allowance for March 2023 from 
                  OACO Professional services
                </p>
            </div>
            <div className="mr-16">
                <h2 className="text-[#272343]">12/06/2020</h2>
                <span className="text-[14p] text-gray-300">5:45 am</span>
            </div>
            <div>
                <h2>₦1,000,000</h2>
                <span className="text-[10px] text-[#00751F] bg-[#f2f6f3] w-[65px] h-[23px] p-1 rounded-full px-2">
                    Successful
                  </span>
            </div>
      </div>
      <div className="flex justify-between items-center mt-2 pb-2">
            <div>
                <p className="w-[193px] text-[12px] font-normal text-[#272343]">
                  Received NGN 30,000 in wallet for 
                  intern - allowance for March 2023 from 
                  OACO Professional services
                </p>
            </div>
            <div className="mr-16">
                <h2 className="text-[#272343]">12/06/2020</h2>
                <span className="text-[14p] text-gray-300">5:45 am</span>
            </div>
            <div>
                <h2>₦1,000,000</h2>
                <span className="text-[10px] text-[#b67171] bg-[#f4dbdb] w-[65px] h-[23px] p-1 rounded-full px-2">
                    Failed
                  </span>
            </div>
      </div>
      
    </div>
  );
}

export default WalletTransValue;
