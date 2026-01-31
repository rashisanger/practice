const shoppingCart = [
    { itemName: "Wireless Mouse", itemPrice: 25 },
    { itemName: "Gaming Monitor", itemPrice: 300 },
    { itemName: "USB-C Cable", itemPrice: 15 },
    { itemName: "Mechanical Keyboard", itemPrice: 120 },
    { itemName: "Webcam", itemPrice: 85 }
];

function sortByPrice(cart){
    return cart.sort((a,b)=>a.itemPrice-b.itemPrice);
}
const sortedCart=sortByPrice(shoppingCart);
console.log("sorted cart:",sortedCart);