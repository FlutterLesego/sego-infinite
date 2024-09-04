import { useAxios } from "../../../hooks/useAxios.js";

//Endpoints
const GET_CLIENTS = "/clients";
const ADD_CLIENT = "/clients/add";

function ClientsService() {
  const { request } = useAxios();

  async function getClients() {
    try {
      const response = await request({ method: "GET", url: GET_CLIENTS });
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function addClient(data) {
    try {
      const response = await request({ method: "POST", url: ADD_CLIENT, data });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return { getClients: getClients, addClient: addClient };
}

export { ClientsService };
