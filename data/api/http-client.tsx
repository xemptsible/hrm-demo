export const API_BASE_URL = "http://localhost:5000";

export enum API_ENDPOINT {
  USERS = `users`,
  DEPARTMENTS = `departments`,
  LEAVE_REQUESTS = `leave_requests`,
  PAYROLLS = `payrolls`,
}

export async function getEndpoint(url: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.error("Something went wrong with the GET request");
    }

    return response.json();
  } catch (error) {
    console.error(`Caught in the client: ${error}`);
    throw error;
  }
}

export async function postEndpoint(url: string, { arg }: { arg: object }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg),
    });

    if (!response.ok) {
      console.error("Something went wrong with the POST request");
    } else console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(`Caught in the client: ${error}`);
    throw error;
  }
}

export async function patchEndpoint(url: string, { arg }: { arg: object }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg),
    });

    if (!response.ok) {
      console.error("Something went wrong with the PATCH request");
    } else console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(`Caught in the client: ${error}`);
    throw error;
  }
}

export async function putEndpoint(url: string, { arg }: { arg: object }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg),
    });

    console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(`Caught in the client: ${error}`);
    throw Error(error as string);
  }
}

export async function deleteEndpoint(url: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.error("Something went wrong with the DELETE request");
    } else console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(`Caught in the client: ${error}`);
    throw error;
  }
}
