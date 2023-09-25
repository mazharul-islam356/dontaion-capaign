import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


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
 
  const {title,image,textColor,description,price} = cardData || {}


    const handleAddDonation = () => {

    const addCardArray = []

    const finalCard = JSON.parse(localStorage.getItem('card'))

    if(!finalCard){
      addCardArray.push(cardData)
      localStorage.setItem('card',JSON.stringify(addCardArray))
      swal("Good job!", "You clicked the button!", "success");
    }else{
      addCardArray.push(...finalCard, cardData)
      localStorage.setItem('card',JSON.stringify(addCardArray))
      swal("Good job!", "You clicked the button!", "success");
    }
  //  console.log(addCardArray);
  }



  return (
    <div>
      <div style={{ backgroundImage: `url(${image})`,backgroundSize:`cover`,
      objectFit:`cover`,
      backgroundRepeat:`no-repeat`,backgroundPosition:`center` }} className="mt-5 w-11/12 mx-auto h-[500px] bg-slate-300 rounded-md border border-base-300">

        <button onClick={handleAddDonation} style={{backgroundColor:`${textColor}`}} className="btn border-0 text-white mt-[430px] ml-12">Donate ${price}</button>
      </div>
    <h1 className="w-11/12 mx-auto text-2xl mt-5 mb-5 font-bold"> {title} </h1>
    <p className="w-11/12 mx-auto"> {description} </p>

    </div>
  );
};

export default Details;
