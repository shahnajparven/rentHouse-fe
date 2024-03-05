// import { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               <Navigate to="/login" />;
//               //  return <Redirect to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               <Navigate to="/login" />;
//               //  return <Redirect to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;

import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
