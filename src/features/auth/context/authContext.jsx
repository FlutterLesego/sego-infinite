import { useState, createContext } from "react";

// Auth services
import { AuthService } from "../services/authservice";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authService = AuthService();

  async function login(data) {
    try {
      const response = await authService.login(data);
      console.log("Login Response: ", response);

      setAuth(response.accessToken);
      setUser(response.user);
      console.log("User data: ", response.user);
    } catch (error) {
      console.error("Login Failed: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ auth, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
