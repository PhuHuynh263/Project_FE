const API_DOMAIN = "http://localhost:3002";

export const get = async (endpoint) => {
  const response = await fetch(`${API_DOMAIN}/${endpoint}`);
  const result = await response.json();
  return result;
};

export const post = async (endpoint, data) => {
  const response = await fetch(`${API_DOMAIN}/${endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const del = async (endpoint) => {
  const response = await fetch(`${API_DOMAIN}/${endpoint}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const patch = async (endpoint, data) => {
  const response = await fetch(`${API_DOMAIN}/${endpoint}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
