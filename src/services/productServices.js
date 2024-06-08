import axios from 'axios';

const API_URL = 'http://localhost:3001/api/products';

export const getAllProduct = async () =>{
    try{
        const response = await axios.get(`${API_URL}/getallproducts`);
        const products =response.data.map(product =>({
        id: product.id,
        name: product.name,
        description: product.description,
        price:product.price,
        ps_product_image: product.ps_product_image && product.ps_product_image.length>0?[
            {
                imagen_url: product.ps_product_image[0].imagen_url
            }
        ]:[]
        }));    
        return products;
    }catch(error){
        console.error("getAllProducto failed", error);
    }
}

export const getProductById = async (Id) =>{
   const id= Number(Id)
    try{
        const response = await axios.post(`${API_URL}/getproductbyid`,{id});
        const product = response.data;
          return{  id: product.id,
            name: product.name, 
            description: product.description,
            price: product.price,
            ps_product_image:product.ps_product_image && product.ps_product_image.length > 0 ? [
                {
                  imagen_url: product.ps_product_image[0].imagen_url
                }
              ] : []
            };
    }catch(error){
        console.error("getProductById failed", error);
    }
}

export const createProduct = async (product)=>{
    try{
        const response = await axios.post(`${API_URL}/createproduct`, product);
        return response.data;
    }catch(error){
        console.error("createProduct failed", error);

    }
}

export const updateProduct = async (product)=>{
    try{
        const response = await axios.put(`${API_URL}/updateproduct`, product);
        return response.data;
    }catch(error){
        console.error("updateProduct failed", error);
    }
}

export const searchProduct = async (query) =>{
    try{
        const response = await axios.get(`${API_URL}/searchproducts/${query}`);
        return response.data;
    }catch(error){
        console.error("searchProduct failed", error);
    }
}

export const deleteProduct = async (id) =>{
    try{
        const response = await axios.delete(`${API_URL}/deleteproduct/${id}`);
        return response.data;
    }catch(error){
        console.error("deleteProduct failed", error);
    }
}
export const getproductByCategory = async (category) =>{
    try{
        const response = await axios.get(`${API_URL}/getproductbycategory/${category}`);
        return response.data;
    }catch(error){
        console.error("getproductByCategory failed", error);
    }
}



const productServices = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    searchProduct,
    deleteProduct,
    getproductByCategory
}

export default productServices;

