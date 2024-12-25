const BASE_URL = "https://dummyjson.com/products";

// Fetch categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/category/${category}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch products for category "${category}": ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
