/* eslint-disable react/prop-types */
const Cards = ({card}) => {
    // console.log(card);
    const {category_name,title,image} = card
    console.log(card);
  return (
    <div className="mt-5">
      <div className="grid card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="#"
          />
        </figure>
        <div className="card-body">
          <h2 className="bg-slate-200 w-fit rounded-md px-2">{category_name}</h2>
          <p className="font-bold">{title} </p>
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
