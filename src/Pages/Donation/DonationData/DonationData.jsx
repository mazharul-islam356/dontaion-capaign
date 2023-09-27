
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const DonationData = ({ caard }) => {
//   console.log(caard);
  const {id,category_name,title,image,cardColor,categoryColor,price,textColor} = caard || {}
  return (
    <div>
      <div style={{backgroundColor:`${cardColor}`}} className="card card-side bg-base-100 shadow-lg">
        <figure >
          <img className="w-80 h-full"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 style={{backgroundColor:`${categoryColor}`,color:`${textColor}`}} className="w-fit rounded-md px-2">{category_name}</h2>
          <p className=" text-xl selection font-bold">{title}</p>
          <p style={{color:`${textColor}`}} className="font-bold">${price}</p>

          <div  className="mr-4">

            <Link to={`/details/${id}`}>
            <button style={{backgroundColor:`${textColor}`}} className="btn text-white">Visit now</button>
            </Link>

            </div>
        </div>
      </div>
      
    </div>
  );
};

export default DonationData;
