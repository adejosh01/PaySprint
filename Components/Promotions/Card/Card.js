import CardValue from "./CardValue";
import { TrendingUpIcon } from "@heroicons/react/solid";

const cards = [
  {
    name: "Total Points",
    digit: "7005",
  
  },
  {
    name: "Referrals",
    digit: "01"
  },

  {
    name: "Special promo",
    digit: "1"
  }
];

function Card() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row ml-4 md:ml-0 md:items-center mt-4 justify-between">
      {cards.map(card =>
        <CardValue name={card.name} digit={card.digit} />
      )}
    </div>
  );
}

export default Card;
