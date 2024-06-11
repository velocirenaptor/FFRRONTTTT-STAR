import axios from 'axios';
const API_URL = 'http://localhost:3001/api/cart';


export const addToCart = async (productId,quantity,)=>{
const accessToken = localStorage.getItem('accessToken');
if(!accessToken){
    console.error('accesToken not found');
    return null;
}   
try{
    const config = {
        headers:{
            authorization: `Bearer ${accessToken}`,
        },
    };
    const response = await axios.post(`${API_URL}/addToCart`,{productId,quantity},config);
    console.log(config);
    return response.data;
}catch(error){
    console.error('addToCart failed', error);

}
}
export const clearCart= async()=>{
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken){
        console.error('accesToken not found');
        return null;
    }
    try{
        const config = {
            headers:{
                authorization: `Bearer ${accessToken}`,
            },
        };
        const response = await axios.get(`${API_URL}/cleanCart`,config);
        return response.data;
    }catch(error){  
    console.error('clearCart failed', error);
    }

}

export const getCart = async() => {
    try{
        const accessToken = localStorage.getItem('accessToken');
        if(!accessToken){
            console.error('accesToken not found');
            return null;
        }

        const config ={
            headers:{
                 authorization: `Bearer ${accessToken}`,
            },
        };
        const response = await axios.get(`${API_URL}/getCart`,config);
        return response.data;
    }catch(error){
        console.error({'getCart failed': error});

    }
};

export const updateCart = async(cartItems) => {
    try{
        const accesToken = localStorage.getItem('accessToken');
        if(!accesToken){
            console.error('accesToken not found');
            return null;
        }

        const config ={
            headers:{
                authorization: `Bearer ${accesToken}`,
            },
        };
    const response = await axios.post(`${API_URL}/updateCart`, {cartItems},config);
    return response.data;
    }catch(error){
        console.error("updateCart failed", error);
    }
};




const cartServices = {
    addToCart,
    getCart,
    updateCart,
    clearCart,
};  

export default cartServices;