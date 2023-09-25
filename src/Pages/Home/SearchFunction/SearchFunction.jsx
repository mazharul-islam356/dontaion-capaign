import { useLoaderData } from "react-router-dom";
import SearchCard from "./SearchCard";

/* eslint-disable react/prop-types */
const SearchFunction = ({ searchValue }) => {
  const cardData = useLoaderData();
  console.log(cardData);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {cardData
          .filter((item) => {
            return searchValue.toLowerCase() === ""
              ? item
              : item.category_name.toLowerCase().includes(searchValue);
          })
          .map((card) => (
            <div key={card.id}>
              {" "}
              <SearchCard card={card}></SearchCard>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchFunction;
