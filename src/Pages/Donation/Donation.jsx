import { useEffect, useState } from "react";
import DonationData from "./DonationData/DonationData";


const Donation = () => {
    const [cards,setCard] = useState([])
     
    useEffect(()=>{
        
        const finalCard = JSON.parse(localStorage.getItem('card'))

        if(finalCard){
            setCard(finalCard)
            
        }else{
            console.log('no data found')
        }
        

    },[])
    console.log(cards);

    return (
        <div>
           {
            cards.map(caard=> <DonationData key={caard.id} caard={caard}></DonationData>)
           }
        </div>
    );
};

export default Donation;