import { Outlet } from 'react-router-dom';
import LinkRoute from '../Route/LinkRoute/LinkRoute';
import Logo from '../Header/Navbar/Logo';



const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto py-12'>
            
           <div className='flex items-center justify-between'>
           <Logo></Logo>
           <LinkRoute></LinkRoute>
           </div>
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;