
function CardValue({name, digit, }) {
    return (
        <>
            <div className="bg-white border-[0.5px] w-[328px] h-[110px] rounded-md ">
                <div className="m-4">
                    <h5 className="text-[16px] text-gray-400">{name}</h5>                   
                    <h2 className="mt-3 text-[32px] text-[#272343]">{digit}</h2>              
                </div>
            </div>
        </>
    )
}

export default CardValue;