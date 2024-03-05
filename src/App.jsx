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
import WebDev from "./components/pages/web-dev";
import WebDesign from "./components/pages/web-design";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />}/>
                <Route path=":id/web-development" element={<WebDev />} />
                <Route path=":id/design-service" element={<WebDesign/>} />
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