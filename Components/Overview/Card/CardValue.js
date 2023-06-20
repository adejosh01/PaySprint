
function CardValue({name, digit, pent, trend}) {
    return (
        <>
            <div className="bg-white border-[0.5px] w-[328px] h-[120px] rounded-md">
                <div className="m-4">
                    <h5 className="text-[16px] text-gray-400">{name}</h5>
                    <div className="flex items-center space-x-20">
                       
                        <h2 className="mt-3 text-[32px] text-[#272343]">{digit}</h2>
                        <p className="flex items-center space-x-2 mt-6 text-[14px] text-[#479951]">
                            {pent}
                            {trend}
                         </p>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardValue;