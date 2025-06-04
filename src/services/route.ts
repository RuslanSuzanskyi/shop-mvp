const BASE_URL = "https://fakestoreapi.in/api/products";

export const productsApi = async (path: string = "") => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch(error) {
    console.error("API request failed:", error);
    throw error;
  }
};
