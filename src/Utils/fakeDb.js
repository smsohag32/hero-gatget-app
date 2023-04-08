import { json } from "react-router-dom";

// addDataToLocalStorage function
const addToDb = (id) =>{

let shoppingCart = {}

    // get previous local storage 
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }




    // add quantity

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


}


// getData in localStorage 

const getDataToDb = () => {
    let shoppingCart = {

    }
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;


}


// remove a specific element from local storage

const removeFromDb = (id) => {

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}


// clear data from data bage 

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')
export {
    addToDb,
    getDataToDb,
    removeFromDb,
    deleteShoppingCart
}