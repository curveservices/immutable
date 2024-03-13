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
import Services from "./components/pages/services-page";
import NotFound from "./components/pages/404";
import Contact from "./components/pages/contact";
import WebDev from "./components/pages/webDev";
import Packages from "./components/pages/packages";
import Chatbots from "./components/pages/chat-bots";
import SocialMarketing from "./components/pages/social-marketing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path=":id/web-development" element={<WebDev />} />
        <Route path=":id/packages" element={<Packages />} />
        <Route path=":id/chat-bots" element={<Chatbots />} />
        <Route
          path=":id/social-media-marketing"
          element={<SocialMarketing />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
