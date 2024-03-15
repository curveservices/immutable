import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { lazy } from "react";

import "./App.scss";

import About from "./components/pages/about";
import Home from "./components/pages/home";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import Contact from "./components/pages/contact";
import Loader from "react-loaders";


const Services = lazy(() => import('./components/pages/servicesPage'))
const WebDev = lazy(() => import('./components/pages/webDev'));
const Packages = lazy(() => import('./components/pages/packages'));
const Chatbots = lazy(() => import('./components/pages/chatBots'));
const SocialMarketing = lazy(() => import('./components/pages/socialMarketing'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={
          <React.Suspense fallback={<Loader type="ball-spin-fade-loader" />}>
            <Services />
          </React.Suspense>} />
        <Route path=":id/web-development" element={
          <React.Suspense fallback={<Loader type="ball-spin-fade-loader" />}>
            <WebDev />
          </React.Suspense>
          } />
        <Route path=":id/chat-bots" element={
          <React.Suspense fallback={<Loader type="ball-spin-fade-loader" />}>
            <Chatbots />
          </React.Suspense>
        } />
        <Route path=":id/packages" element={
          <React.Suspense fallback={<Loader type="ball-spin-fade-loader" />}>
            <Packages />
          </React.Suspense>
        } />
        <Route path=":id/social-media-marketing" element={
          <React.Suspense fallback={<Loader type="ball-spin-fade-loader" />}>
            <SocialMarketing />
          </React.Suspense>
        } />
      
       
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
