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
import NotFound from "./components/pages/404";
import Contact from "./components/pages/contact";
import Services from "./components/pages/servicesPage";
import WebDev from "./components/pages/webDev";
import ChatBots from "./components/pages/chatBots";
import Packages from "./components/pages/packagesPage";
import PrivacyPolicy from "./components/pages/policy";
import FeaturedWork from "./components/pages/featuredWork";
import ClientDiscoveryForm from "./components/pages/clientForm";
import SeoMaintenance from "./components/pages/seoMaintenance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path=":id/web-development" element={<WebDev />} />
        <Route path=":id/chat-bots" element={<ChatBots />} />
        <Route path=":id/packages" element={<Packages />} />
        <Route
          path=":id/seo-website-maintenance"
          element={<SeoMaintenance />}
        />
        <Route path="portfolio" element={<FeaturedWork />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="discovery-form" element={<ClientDiscoveryForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
