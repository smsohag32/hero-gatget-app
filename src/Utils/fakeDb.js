
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



export {
    addToDb
}