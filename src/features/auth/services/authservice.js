import { axiosInstance } from "../../../api/axiosInstance";

// Endpoints
const LOGIN = "/auth/login";

function AuthService() {
  async function login(data) {
    const response = await axiosInstance({ method: "POST", url: LOGIN, data });
    return response.data;
  }
  return { login };
}

export { AuthService };
