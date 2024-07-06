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
      swal("Thank you!", "Your donation helps us support.", "success");
    }else{
      addCardArray.push(...finalCard, cardData)
      localStorage.setItem('card',JSON.stringify(addCardArray))
      swal("Thank you!", "Your donation helps us support.", "success");
    }
  //  console.log(addCardArray);
  }



  return (
    <div>
    <div>
    <div>
      <div style={{ backgroundImage: `url(${image})`,backgroundSize:`cover`,
      objectFit:`cover`,
      backgroundRepeat:`no-repeat`,backgroundPosition:`center`}} className="mt-5 w-11/12 mx-auto h-[500px] bg-slate-300 absolute rounded-md border border-base-300">


<div className="h-24  absolute top-[400px] left-0 right-30 w-11/12 mx-auto bottom-0 bg-black bg-opacity-50">
   </div>
      </div>
       
        <button onClick={handleAddDonation} style={{backgroundColor:`${textColor}`}} className="btn relative border-0 text-white mt-[445px] ml-12">Donate ${price}</button>
        
      </div>    

    </div> 

   <h1 className="w-11/12 mx-auto text-2xl mt-16 mb-5 font-bold"> {title} </h1>
    <p className="w-11/12 mx-auto"> {description} </p>

    </div>
  );
};

export default Details;
