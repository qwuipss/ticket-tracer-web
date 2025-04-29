import { useNavigate } from "react-router-dom";

import { ProtectedRouteProps } from "../types/Types";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children } : ProtectedRouteProps)  => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/auth', { replace: true })
    }
  }, [navigate, user])

  return children;
}

export default ProtectedRoute;