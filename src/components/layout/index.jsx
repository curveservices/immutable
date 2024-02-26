import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs';
import Navbar from '../navbar';
import './index.scss';

const Layout = () => {
    const [showButton, setShowButton] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
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
        <div className="app">
            <Navbar />
            <Breadcrumbs />
            <main>
                <Outlet />
                          {showButton && (
                <button className='back-to-top' onClick={scrollToTop}>
                    &#11014;
                </button>
            )}
            </main>
  
        </div>
        
     );
}
 
export default Layout;