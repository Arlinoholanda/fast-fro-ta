import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated }) => {
  return (
    <Route
      render={() => (isAuthenticated ? element : <Navigate to="/login" />)}
    />
  );
};

export default PrivateRoute;
