import axiosConfig from "./axiosConfig";

export const getAllProducto = async () =>{
    try{
        const response = await axiosConfig.get('productos/getallproducts');
        return response.data;
    }catch(error){
        console.error("getAllProducto failed", error);
    }
}

export const getProductById = async (id) =>{
    try{
        const response = await axiosConfig.get(`productos/getproductbyid/${id}`);
        return response.data;
    }catch(error){
        console.error("getProductById failed", error);
    }
}
