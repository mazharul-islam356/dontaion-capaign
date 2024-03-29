import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Satistics from '../Pages/Satistics/Satistics';
import Details from '../Pages/Details/Details';

const Route = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/cardData1.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element: <Satistics></Satistics>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader: ()=> fetch('/detailsData.json')
            }
        

        ]
    }
    
])
    
   


export default Route;