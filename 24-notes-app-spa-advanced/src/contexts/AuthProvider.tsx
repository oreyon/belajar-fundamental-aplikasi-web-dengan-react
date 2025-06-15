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

  const handleLogin = useCallback(async (email: string, password: string) => {
    const response = await login({ email, password });
    const result = await response.json();

    const accessToken = result?.data?.accessToken;
    if (!accessToken) throw new Error("Login failed: no access token");

    putAccessToken(accessToken);

    const userResponse = await getUserLogged();
    const userResult = await userResponse.json();
    setAuthedUser(userResult.data);
  }, []);

  const logout = useCallback(() => {
    putAccessToken("");
    setAuthedUser(null);
  }, []);

  const initialize = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setInitializing(false);
      return;
    }

    try {
      const response = await getUserLogged();
      const result = await response.json();
      setAuthedUser(result.data);
    } catch (err) {
      console.error("Auth initialization failed:", err);
      putAccessToken("");
      setAuthedUser(null);
    } finally {
      setInitializing(false);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);


	return <AuthContext.Provider 
  value={
    {
      authedUser,
      initializing,
      login: handleLogin,
      logout
    }
  }>
    {children}</AuthContext.Provider>;
}
export default AuthProvider