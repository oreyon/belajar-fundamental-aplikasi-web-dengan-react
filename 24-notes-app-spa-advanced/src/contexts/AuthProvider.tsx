import { useCallback, useEffect, useState, type ReactNode } from "react"
import { getAccessToken, getUserLogged, login, putAccessToken } from "../libs/api/note.service";
import AuthContext, { type AuthedUser } from "./AuthContext";

interface PropTypes {
  children: ReactNode;
}

const AuthProvider = (props:PropTypes) => {
   const { children } = props;
  const [authedUser, setAuthedUser] = useState<AuthedUser | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = getAccessToken();
      if (token) {
        try {
          const response = await getUserLogged();
          if (response.status === 200) {
            const userData = await response.json();
            setAuthedUser(userData.data);
          }
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
      setInitializing(false);
    };
    checkAuthStatus();
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const response = await login({ email, password });
    const responseBody = await response.json();

    if (response.status === 200) {
      putAccessToken(responseBody.data.accessToken);
      const getCurrentUser = await getUserLogged();
      const userData = await getCurrentUser.json();
      setAuthedUser(userData.data);
    } else {
      throw new Error(responseBody.message || "Login failed");
    }
  }, []);

  const handleLogout = useCallback(() => {
    putAccessToken("");
    setAuthedUser(null);
  }, []);


  const contextValue = {
    authedUser,
    initializing,
    login: handleLogin,
    logout: handleLogout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider