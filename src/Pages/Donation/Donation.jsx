import { useEffect, useState } from "react";
import DonationData from "./DonationData/DonationData";

const Donation = () => {
  const [cards, setCard] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const finalCard = JSON.parse(localStorage.getItem("card"));

    if (finalCard) {
      setCard(finalCard);
    } else {
      console.log("no data found");
    }
  }, []);
  // console.log(cards);

  return (
    <div>
      <div className=" mt-4 grid lg:grid-cols-2 gap-4">
        {isShow
          ? cards.map((caard) => (
              <DonationData key={caard.id} caard={caard}></DonationData>
            ))
          : cards
              .slice(0,4)
              .map((caard) => (
                <DonationData key={caard.id} caard={caard}></DonationData>
              ))}
      </div>
      
      
        {cards.length > 4 && <button onClick={()=>{setIsShow(!isShow)}} className="btn mt-6 ml-[640px] btn-sm bg-green-500 w-32"> {isShow ? 'See less' : 'See more'} </button>}
    </div>
  );
};

export default Donation;
