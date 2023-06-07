
function TransValueView({ description, date, time, amount }) {
  return (
    <div className="flex-container mt-2 pb-4 border-b-[0.5px]">
      <div>
        <p className="w-[193px] text-[12px] font-normal text-[#272343]">
          {description}
        </p>
      </div>
      <div className="mr-16">
        <h2 className="text-[#272343]">
          {date}
        </h2>
        <span className="text-[14px] text-gray-300">
          {time}
        </span>
      </div>
      <div>
        <h2>
          {amount}
        </h2>
      </div>
    </div>
  );
}

export default TransValueView;
