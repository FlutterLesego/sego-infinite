import { useState, createContext } from "react";

// clients service
import { ClientsService } from "../services/clientsService";

export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  const clientsService = ClientsService();

  async function getClients() {
    const clients = await clientsService.getClients();
    setClients(clients);
  }

  async function addClient(data) {
    const clients = await clientsService.addClient(data);
    setClients(clients);
  }

  return (
    <ClientsContext.Provider value={{ clients, getClients, addClient }}>
      {children}
    </ClientsContext.Provider>
  );
};
