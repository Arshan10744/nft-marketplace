import { Navigate } from "react-router-dom";

const Private = ({ Component }) => {
  let token = localStorage.getItem("jwt");
  if (!token) {
    return <Navigate to={`/`}/>;
  }
  return <Component/>;
};

export default Private;
