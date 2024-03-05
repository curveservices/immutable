import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

const Breadcrumbs = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let currentLink = "";
    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb != "")
        .map((crumb) => {
            currentLink += `/${crumb}`;
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        });
    return <div className={`breadcrumbs ${isScrolled ? 'navbar-scroll' : ''}` }>{crumbs}</div>;
};
 
export default Breadcrumbs;