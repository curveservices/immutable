import "./index.scss";
import notFound from "../../../assets/images/404.png";
import Button from "../../button";
import { Helmet, HelmetProvider } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <h1>PAGE NOT FOUND</h1>
        <Button text="Back home" link="/" />
        <img src={notFound} alt="page not found" />
      </div>
      <HelmetProvider>
         <Helmet>
          <title>Error 404 - Page not found</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default NotFound;
