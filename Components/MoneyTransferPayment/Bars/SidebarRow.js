
function SidebarRow({Icon, title, active}) {
   
    return (
        <div className={` ${active && 'bg-[#272343]'} flex w-[100px] md:w-[280px] md:h-[60px] items-center space-x-4 p-6 cursor-pointer  rounded-md`}>
            
             {Icon && (
                    <Icon className ={` ${active && 'text-white'} h-6 w-8 text-gray-400 text-center font-extrabold sidehover`} />
                )}
                <p className={`${active && 'text-white'} hidden md:inline-flex font-medium text-gray-400`}>{title} </p>
        </div>
    )
}

export default SidebarRow;
