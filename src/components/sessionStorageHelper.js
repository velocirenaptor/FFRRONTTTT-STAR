export const getCart = () => {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    const updatedCart = [...cart, product];
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  export const removeFromCart = (productId) => {
    const cart = getCart();
    const updatedCart = cart.filter(product => product.id !== productId);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  export const clearCart = () => {
    sessionStorage.removeItem('cart');
  };
