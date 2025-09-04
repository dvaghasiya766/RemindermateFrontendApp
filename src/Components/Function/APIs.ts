import { API_BASE_URL } from './APIConfig';

const fetchProducts = async (id: number) => {
  try {
    const response = await fetch(API_BASE_URL + id);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const fetchAllProducts = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export { fetchProducts, fetchAllProducts };
