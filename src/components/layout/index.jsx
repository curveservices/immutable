import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs';
import Navbar from '../navbar';
import './index.scss';

const Layout = () => {
    return ( 
        <div className="app">
            <Navbar />
            <Breadcrumbs />
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default Layout;