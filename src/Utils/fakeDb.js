
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


export {
    addToDb,
    getDataToDb
}