import { NavLink } from "react-router-dom";
import "./index.scss";

const Links = (props) => {
  return (
    <div className="link-container">
      <div className="service-link">
        <NavLink to={props.webLink}>
          <h3>WEB DEVELOPMENT</h3>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.maintenanceLink}>
          <h3>MAINTENANCE & SEO</h3>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.aiLink}>
          <h3>AI SOLUTIONS</h3>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.packagesLink}>
          <h3>PACKAGES</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Links;
