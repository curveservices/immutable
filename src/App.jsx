import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/loadingSpinner";
import "./App.scss";
import ClientPage from "./pages/clientPages";

const About = React.lazy(() => import("./pages/about"));
const Home = React.lazy(() => import("./pages/home"));
const Layout = React.lazy(() => import("./layout/main"));
const NotFound = React.lazy(() => import("./pages/404"));
const Contact = React.lazy(() => import("./pages/contact"));
const Services = React.lazy(() => import("./pages/servicesPage"));
const WebDev = React.lazy(() => import("./pages/webDev"));
const ChatBots = React.lazy(() => import("./pages/chatBots"));
const SocialMedia = React.lazy(() => import("./pages/assistants/socialMedia"));
const CustomerService = React.lazy(() => import("./pages/assistants/customerService"));
const Ecommerce = React.lazy(() => import("./pages/assistants/ecommerce"));
const Packages = React.lazy(() => import("./pages/packagesPage"));
const PrivacyPolicy = React.lazy(() => import("./pages/policy"));
const FeaturedWork = React.lazy(() => import("./pages/featuredWork"));
const ClientDiscoveryForm = React.lazy(() => import("./pages/clientForm"));
const SeoMaintenance = React.lazy(() => import("./pages/seoMaintenance"));
const AuditFormPage = React.lazy(() => import("./pages/auditForm"));

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
          path="/portfolio/:clientId"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ClientPage/>
            </Suspense>
          } />

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
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
