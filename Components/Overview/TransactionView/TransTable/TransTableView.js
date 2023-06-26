import TransValueView from "./TransValueView";

const transvalues = [
  {
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000"
  },

  {
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000"
  },

  {
    description:
      " Received NGN 30,000 in wallet for intern allowance for March 2023 from OACO Professional services",
    date: "12/06/2020",
    time: "5:45 am",
    amount: "₦1,000,000"
  }
];

function TransTableView() {
  return (
    <div className="w-full" >
      <div className="flex justify-between w-full items-center mt-4 pb-4 border-b-[0.5px]">
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

      <div>
        {transvalues.map(transvalue =>
          <TransValueView
            description={transvalue.description}
            date={transvalue.date}
            time={transvalue.time}
            amount={transvalue.amount}
          />
        )}
      </div>
    </div>
  );
}

export default TransTableView;
