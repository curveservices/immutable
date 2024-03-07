import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import './index.scss';

const Layout = () => {
    const [showButton, setShowButton] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 550) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return ( 
        <>
        <div >
            <Navbar />
            <main className='app'>
                <Outlet />           
            </main>
            
          {showButton && (
            <button className='back-to-top' onClick={scrollToTop}>
                &#11014;
            </button>
            )}
        </div> 
            <Footer />
        </>
     );
}
 
export default Layout;