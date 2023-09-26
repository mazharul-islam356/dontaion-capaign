/* eslint-disable react/prop-types */
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const data = [
  { value: 10, label: 'Total Donation' },
  { value: 15, label: 'My Donation' },
];

const size = {
  width:1000,
  height: 300,
};

export default function PieArcLabel({cards}) {
    console.log(cards);
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}