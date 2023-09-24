import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";


const Home = () => {
    const cardData = useLoaderData()
    return (
        <div>
            
            <Banner></Banner>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
           {
            cardData.map(card=><Cards card={card} key={card.id}></Cards>)
            }
           </div>
            
        </div>
    );
};

export default Home;