import { useNavigate } from "react-router-dom";

// Axios Instance
import { axiosInstance } from "../api/axiosInstance";

// Hooks
import { useAuth } from "@/features/auth/hooks/useAuth";

export const useAxios = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const request = async (options) => {
    try {
      // Make a request to the endpoint
      const response = await axiosInstance.request({
        ...options,
        headers: { Authorization: `Bearer ${auth}` },
      });

      return response;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        const { message } = error.response.data;

        // Check if the message is either "Access token missing!" or "Invalid access token!"
        if (
          message === "Access token missing!" ||
          message === "Invalid access token!"
        ) {
          try {
            // Attempt to refresh the token
            const refreshResponse = await axiosInstance.post("/auth/refresh", {
              refreshToken: auth.refreshToken,
            });

            // Update the authentication context with the new access token
            setAuth(refreshResponse.data.accessToken);

            // Retry the original request with the new token
            const retryResponse = await axiosInstance.request({
              ...options,
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
              },
            });

            return retryResponse; // Return the response after successful retry
          } catch (refreshError) {
            // Handle token refresh failure, e.g., redirect to login
            // You might want to log out the user in this case
            navigate("/login");
          }
        } else if (status === 401) {
          // Implement logout logic
          // Log out the user if the response is 401 (unauthorized)
          navigate("/login");
        }
      }

      throw error; // Re-throw the error after handling
    }
  };

  return { request };
};
