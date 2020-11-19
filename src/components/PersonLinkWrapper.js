import React from "react";
import { Link } from "react-router-dom";
const PersonLinkWrapper = ({ children, location, type }) =>
  location === type ? <>{children}</> : <Link to={`/${type}`}>{children}</Link>;

export default React.memo(PersonLinkWrapper);
