import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({card}) => {
    // console.log(card);
    const {id,category_name,title,image,cardColor,categoryColor,textColor} = card || {}
    // console.log(color);
    
  return (
  <Link to={`/details/${id}`}>
    <div className="mt-5">
      <div style={{backgroundColor:`${cardColor}`}} className="grid card w-80 bg-base-100 shadow-xl">
     
        <figure>
          
          <img
            src={image}
            alt="#"
          />
        </figure>
        <div className="card-body">
          <h2 style={{backgroundColor:`${categoryColor}`,color:`${textColor}`}} className="w-fit rounded-md px-2">{category_name}</h2>
          <p style={{color:`${textColor}`}} className="font-bold">{title} </p>        
        </div>
      </div>
    </div>
  </Link>
  );
};

export default Cards;
