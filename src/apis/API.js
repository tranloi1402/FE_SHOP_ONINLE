import axios from 'axios';

const URL = 'http://localhost:5000';

// Category-API
export const getAllcategory = () => axios.get(`${URL}/category`);

export const creatCatePost = async (payload) => {
    await axios.post(`${URL}/createCate`, payload, {withCredentials: true});
};

export const editByID = (payload) => axios.get(`${URL}/edit/${payload}`);
export const postUpdateCate = async (payload) => {
    await axios.post(`${URL}/updateCategory`, payload);
};

export const postDeleteCateById = async (payload) => {
    await axios.post(`${URL}/deleteCategory/${payload}`);
};

// Product-API
export const getAllProduct = () => axios.get(`${URL}/product`);

export const postCreateProduct = async (payload) => {
    await axios.post(`${URL}/createProduct`, payload, {withCredentials: true});
};

export const postEditProduct = (payload) => axios.get(`${URL}/editProduct/${payload}`);
export const postUpdateProduct = async (payload) => {
    await axios.post(`${URL}/updateProduct`, payload);
};

export const postDeleteProduct = async (payload) => {
    await axios.post(`${URL}/deleteProduct/${payload}`);
};

// Orders-API
export const getAllOrder = () => axios.get(`${URL}/order`);

export const editOrder = (payload) => axios.get(`${URL}/findOrder/${payload}`);

export const postUpdateOrder = async (payload) => {
    await axios.post(`${URL}/updateOrder`, payload);
};
