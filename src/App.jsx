import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";

import "./App.scss";

import About from "./components/pages/about";
import Home from "./components/pages/home";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import Contact from "./components/pages/contact";
const Services = React.lazy(() => import('./components/pages/servicesPage'))
const WebDev = React.lazy(() => import('./components/pages/webDev'));
const Packages = React.lazy(() => import('./components/pages/packages'));
const Chatbots = React.lazy(() => import('./components/pages/chatBots'));
const SocialMarketing = React.lazy(() => import('./components/pages/socialMarketing'));

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
