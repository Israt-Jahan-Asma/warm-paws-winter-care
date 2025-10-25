import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

// const MainLayout = () => {
//     return (
//         <div className='flex flex-col min-h-screen'>
//             <header>
//                 <Navbar></Navbar>
//             </header>
//             <main className='flex flex-1 w-full'>
//                 <Outlet></Outlet>
//             </main>
//             <footer className='bg-secondary'>
//                 <Footer></Footer>
//             </footer>
//         </div>
//     );
// };
const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className=' shadow-sm '>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='bg-secondary'>
                <Footer />
            </footer>
        </div>
    );
  };

export default MainLayout;