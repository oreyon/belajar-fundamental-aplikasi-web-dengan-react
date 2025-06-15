import { createContext } from "react";

export type AuthedUser = {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  authedUser: AuthedUser | null;
  initializing: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null)
export default AuthContext