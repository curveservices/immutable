import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";

import About from "./components/pages/about";
import Home from "./components/pages/home";
import Layout from "./components/layout";
import Services from "./components/pages/Services-page";
import NotFound from "./components/pages/404";
import Contact from "./components/pages/contact";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact /> } />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    ),
);

function App() {
    return <RouterProvider router={router} />
}

export default App;