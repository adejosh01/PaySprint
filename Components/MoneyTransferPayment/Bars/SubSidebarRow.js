
function SubSidebarRow({title, active}) {
   
    return (
        <div className={` cursor-pointer`}>
            {
              title && (
                <p className={`${active && 'text-gray-400'} text-[14px] block px-4 py-2 active:text-[#272343]`}>{title} </p>
              )}
            
        </div>
    )
}

export default SubSidebarRow;
