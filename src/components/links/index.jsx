import { NavLink } from "react-router-dom";
import "./index.scss";

const Links = (props) => {
  return (
    <div className="link-container">
      <div className="service-link">
        <NavLink to={props.webLink}>
          <div>WEB DEVELOPMENT</div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.maintenanceLink}>
          <div>SEO & MAINTENANCE</div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.aiLink}>
          <div>AI SOLUTIONS</div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.packagesLink}>
          <div>PACKAGES</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Links;
