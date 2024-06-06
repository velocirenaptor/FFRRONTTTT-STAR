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


export const createProduct = async (product)=>{
    try{
        const response = await axiosConfig.post('productos/createproduct', product);
        return response.data;
    }catch(error){
        console.error("createProduct failed", error);

    }
    
}

export const updateProduct = async (product)=>{
    try{
        const response = await axiosConfig.put('productos/updateproduct', product);
        return response.data;
    }catch(error){
        console.error("updateProduct failed", error);
    }
}

export default {getAllProducto, getProductById, createProduct};

