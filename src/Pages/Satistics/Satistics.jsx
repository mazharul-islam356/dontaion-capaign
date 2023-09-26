import Chart from "react-google-charts";


// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

const Satistics = () => {

  // console.log(cardd);
  const cardArray = localStorage.getItem('card')
  const card = JSON.parse(cardArray)
  const cardLength = card.length
 

  const data = [
    ["Task", "Hours per Day"],
    ["My Donation", cardLength],
    ["Total Donation", 12],
  ];

  return (
    <div>
     
    <Chart
      chartType="PieChart"
      data={data}
      
      width={"100%"}
      height={"400px"}
    />
  
      
    </div>
  );
};

export default Satistics;