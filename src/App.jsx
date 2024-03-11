import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import "./App.scss";
import Layout from "./components/layout";
import NotFound from "./components/pages/404";
import WebDev from "./components/pages/web-dev";
import WebDesign from "./components/pages/web-design";
import Packages from "./components/pages/packages";
import Chatbots from "./components/pages/chat-bots";
import SocialMarketing from "./components/pages/social-marketing";
import Loader from "react-loaders";
const Home = React.lazy(() => import('./components/pages/home'))
const About = React.lazy(() => import('./components/pages/about'))
const Services = React.lazy(() => import('./components/pages/servicesPage'))
const Contact = React.lazy(() => import('./components/pages/contact'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <React.Suspense fallback={<Loader type="line-spin-fade-loader"/> }>
            <Home />
        </React.Suspense>} />
        <Route path="about" element={
          <React.Suspense fallback={<Loader type="line-spin-fade-loader" />}>
            <About />
          </React.Suspense>} />
        <Route path="contact" element={
          <React.Suspense fallback={<Loader type="line-spin-fade-loader" />}>
          <Contact />
        </React.Suspense>} />
        <Route path="services" element={
          <React.Suspense fallback={<Loader type="line-spin-fade-loader" />}>
          <Services />
        </React.Suspense>} />
        <Route path=":id/web-development" element={<WebDev />} />
        <Route path=":id/design-service" element={<WebDesign />} />
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
