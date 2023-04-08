import { getDataToDb } from "../Utils/fakeDb"


export const productsAndCartData = async() => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    console.log(products);
    const savedCart = getDataToDb();
    
    const cartArr = [];
    for(const id in savedCart){
        const foundProduct = products.find(product => product.id === id);
        if(foundProduct){
            foundProduct.quantity = savedCart[id];
            cartArr.push(foundProduct);
        }
    }
    return {cartArr, products}
}
