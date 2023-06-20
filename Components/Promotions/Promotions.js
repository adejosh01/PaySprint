import Header from "./Bars/Header"
import Sidebar from "./Bars/Sidebar"
import Card from "./Card/Card"
import PromotionContent from "./Content/PromotionContent"


function Promotions() {
  return (
    <>
        <Header />
        <Sidebar />

        <div className=" ml-28 md:ml-80 lg:px-10 mt-2">
            <div className="mt-6">
                <p className="text-gray-400 text-[16px] ">Redeem points and special promos</p>
            </div>

            <Card />
            <PromotionContent />
           



        </div>
    </>
  )
}

export default Promotions