import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  // console.log(id);
  const [cardData, setCard] = useState();
  const cards = useLoaderData();

  // console.log(cards);
  useEffect(() => {
    const findCard = cards?.find((card) => card.id == id);
    setCard(findCard);
  }, [id, cardData]);
 

  const {category_name,title,image,cardColor,categoryColor,textColor,description,price} = cardData || {}


  return (
    <div>
      <div style={{ backgroundImage: `url(${image})`,objectFit:`cover`,backgroundSize:`cover` }} className="mt-5 w-11/12 mx-auto h-[500px] bg-slate-300 border border-base-300">

        <button style={{backgroundColor:`${textColor}`}} className="btn border-0 text-white mt-[430px] ml-12">Donate ${price}</button>
      </div>
    <h1 className="w-11/12 mx-auto text-2xl mt-5 mb-5 font-bold"> {title} </h1>
    <p className="w-11/12 mx-auto"> {description} </p>

    </div>
  );
};

export default Details;
