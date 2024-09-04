import { useContext } from "react";

// User context
import { ClientsContext } from "../context/ClientsContext";

function useClients() {
  const context = useContext(ClientsContext);

  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
}

export { useClients };
