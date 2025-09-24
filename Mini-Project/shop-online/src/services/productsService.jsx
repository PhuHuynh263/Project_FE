import { del, get, patch, post } from "../utils/request";

export const getProductList = async () => {
  const result = await get("products");
  return result;
};

export const createProductList = async (options) => {
  const result = await post("products", options);
  return result;
};

export const deleteProductList = async (id) => {
  const result = await del("products", id);
  return result;
};

export const editProductList = async (id, options) => {
  const result = await patch(`products/${id}`, options);
  return result;
};
