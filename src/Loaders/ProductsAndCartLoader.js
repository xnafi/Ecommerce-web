import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();

    const saveCart = getStoredCart();
    const initialCart = [];
    for (const id in saveCart) {
        const addedProducts = products.find(product => product.id === id)
        if (addedProducts) {
            const quantity = saveCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts)
        }
    }
    return { products, initialCart }
}
