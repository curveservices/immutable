import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/loadingSpinner";
import "./App.scss";

const About = React.lazy(() => import("./components/pages/about"));
const Home = React.lazy(() => import("./components/pages/home"));
const Layout = React.lazy(() => import("./components/layout"));
const NotFound = React.lazy(() => import("./components/pages/404"));
const Contact = React.lazy(() => import("./components/pages/contact"));
const Services = React.lazy(() => import("./components/pages/servicesPage"));
const WebDev = React.lazy(() => import("./components/pages/webDev"));
const ChatBots = React.lazy(() => import("./components/pages/chatBots"));
const SocialMedia = React.lazy(
  () => import("./components/pages/assistants/socialMedia"),
);
const CustomerService = React.lazy(
  () => import("./components/pages/assistants/customerService"),
);
const Ecommerce = React.lazy(
  () => import("./components/pages/assistants/ecommerce"),
);
const Packages = React.lazy(() => import("./components/pages/packagesPage"));
const PrivacyPolicy = React.lazy(() => import("./components/pages/policy"));
const FeaturedWork = React.lazy(
  () => import("./components/pages/featuredWork"),
);
const ClientDiscoveryForm = React.lazy(
  () => import("./components/pages/clientForm"),
);
const SeoMaintenance = React.lazy(
  () => import("./components/pages/seoMaintenance"),
);
const TelehillClient = React.lazy(
  () => import("./components/pages/clientPages/clientTelehill"),
);
const Morbot = React.lazy(
  () => import("./components/pages/clientPages/clientMorfbot"),
);
const ViveLaCrepe = React.lazy(
  () => import("./components/pages/clientPages/clientViveLaCrepe"),
);
const Garland = React.lazy(
  () => import("./components/pages/clientPages/clientGarland"),
);
const AuditFormPage = React.lazy(() => import("./components/pages/auditForm"));

const loadPageCSS = (page) => import(`./components/pages/${page}.scss`);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path=":id/web-development"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <WebDev />
            </Suspense>
          }
        />
        <Route
          path=":id/ai-assistants"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ChatBots />
            </Suspense>
          }
        />
        <Route
          path="services/ai-assistants/social-media"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SocialMedia />
            </Suspense>
          }
        />
        <Route
          path="services/ai-assistants/customer-service"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CustomerService />
            </Suspense>
          }
        />
        <Route
          path="services/ai-assistants/ecommerce"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Ecommerce />
            </Suspense>
          }
        />
        <Route
          path=":id/packages"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Packages />
            </Suspense>
          }
        />
        <Route
          path=":id/seo-website-maintenance"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SeoMaintenance />
            </Suspense>
          }
        />
        <Route
          path="portfolio"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FeaturedWork />
            </Suspense>
          }
        />
        <Route
          path=":id/telegraph-hill-tutoring"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TelehillClient />
            </Suspense>
          }
        />
        <Route
          path=":id/morfbot"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Morbot />
            </Suspense>
          }
        />
        <Route
          path=":id/vive-la-crepe"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ViveLaCrepe />
            </Suspense>
          }
        />
        <Route
          path=":id/garland-surgical"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Garland />
            </Suspense>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="discovery-form"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ClientDiscoveryForm />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="performance-audit-form"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <AuditFormPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>,
  ),
  {
    future: {
      v7_startTransition: true,
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
