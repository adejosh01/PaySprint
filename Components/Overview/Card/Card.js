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
    <div className="flex flex-col sm:flex-col md:flex-row ml-4 md:ml-0 md:items-center mt-4 justify-between">
      {cards.map(card =>
        <CardValue name={card.name} digit={card.digit} pent={card.pent} trend={card.trend} />
      )}
    </div>
  );
}

export default Card;
