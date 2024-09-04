import { useContext } from "react";

// Auth Context
import { AuthContext } from "../context/authContext";

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { useAuth };
