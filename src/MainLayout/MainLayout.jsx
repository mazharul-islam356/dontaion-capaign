import { Outlet } from 'react-router-dom';
import LinkRoute from '../Route/LinkRoute/LinkRoute';
import Logo from '../Header/Navbar/Logo';
import Footer from '../Pages/footer/Footer';



const MainLayout = () => {
    return (
        <div className='pt-12'>
            
           <div className='flex w-11/12 mx-auto flex-wrap text-center items-center justify-between'>
           <Logo></Logo>
           <LinkRoute></LinkRoute>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>      
           
        </div>
    );
};

export default MainLayout;