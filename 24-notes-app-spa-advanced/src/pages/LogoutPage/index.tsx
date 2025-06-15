import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Fragment } from "react";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { authedUser, logout } = useAuth();

  useEffect(() => {
    if (authedUser) {
      logout();
      navigate("/login", { replace: true });
    }
  }, [authedUser]);

  return <Fragment />;
};

export default LogoutPage;
