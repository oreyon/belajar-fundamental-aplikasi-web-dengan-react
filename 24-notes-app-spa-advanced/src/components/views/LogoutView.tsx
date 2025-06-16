import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Fragment, useEffect } from "react";

const LogoutView = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  useEffect(() => {
    logout();
    navigate("/login", { replace: true });
  }
  , [logout, navigate]);

  
  return <Fragment />;
}
export default LogoutView