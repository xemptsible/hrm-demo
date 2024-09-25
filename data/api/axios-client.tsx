import axios from "axios";

const API_BASE_URL = "http://localhost:3000/";

export const axiosClient = axios.create({ baseURL: API_BASE_URL });

export const get = async (endpoint: string, query_params?: string) => {
  try {
    const response = axiosClient.get(endpoint, { params: query_params });
    if (((await response).status = 200)) {
      console.log("Got from client: " + response);
      return response;
    }
  } catch (error) {
    console.error("Caught: " + error);
    throw error;
  }
};
