import CardValue from "./CardValue";
import { TrendingUpIcon } from "@heroicons/react/solid";

const cards = [
  {
    name: "Available balance",
    digit: "#00.00",
    pent: "2.34%",
    trend: <TrendingUpIcon className="h-6 w-6" />

  },
  {
    name: "Withdrawal",
    digit: "01"
  },

  {
    name: "Total Points",
    digit: "1400"
  }
];

function Card() {
  return (
    <div className="flex flex-col  min-w-full  md:flex-row ml-4 md:ml-0  mt-4 justify-between  space-y-4 md:space-y-0">
      {cards.map(card =>
        <CardValue name={card.name} digit={card.digit} pent={card.pent} trend={card.trend} />
      )}
    </div>
  );
}

export default Card;
