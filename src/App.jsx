import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import NotFound from "./components/404";
import About from "./components/about";
import Home from "./components/home";
import Layout from "./components/layout";
import Services from "./components/Services-page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />}/>
            
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    ),
);

function App() {
    return <RouterProvider router={router} />
}

export default App;