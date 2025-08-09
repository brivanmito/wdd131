const promosHeroImg = [
    { name: "Redmi Note 14 Pro", brand: "Xiaomi", type: "Phone", price: "400$" },
    { name: "Galaxy A56", brand: "Samsung", type: "Phone", price: "500$" },
    { name: "iPhone 15 Pro", brand: "Apple", type: "Phone", price: "999$" },
    { name: "Pixel 8", brand: "Google", type: "Phone", price: "700$" },
    { name: "OnePlus 11", brand: "OnePlus", type: "Phone", price: "650$" },
    { name: "Moto G Power", brand: "Motorola", type: "Phone", price: "250$" },
    { name: "Galaxy S23 Ultra", brand: "Samsung", type: "Phone", price: "1200$" },
    { name: "iPhone SE", brand: "Apple", type: "Phone", price: "429$" },
    { name: "Xperia 5 IV", brand: "Sony", type: "Phone", price: "950$" },
    { name: "Redmi Note 13", brand: "Xiaomi", type: "Phone", price: "350$" },
    { name: "Pixel 7a", brand: "Google", type: "Phone", price: "499$" },
    { name: "OnePlus Nord 3", brand: "OnePlus", type: "Phone", price: "450$" },
    { name: "Moto Edge 40", brand: "Motorola", type: "Phone", price: "600$" },
    { name: "Galaxy Z Fold5", brand: "Samsung", type: "Phone", price: "1800$" },
    { name: "iPhone 14", brand: "Apple", type: "Phone", price: "799$" },
    { name: "Xperia 1 IV", brand: "Sony", type: "Phone", price: "1100$" },
    { name: "Redmi 12C", brand: "Xiaomi", type: "Phone", price: "180$" },
    { name: "Pixel 6a", brand: "Google", type: "Phone", price: "449$" },
    { name: "OnePlus 10T", brand: "OnePlus", type: "Phone", price: "699$" },
    { name: "Moto G Stylus", brand: "Motorola", type: "Phone", price: "300$" }
];

//Apply a filter 
const phonesCheaper = promosHeroImg.filter(phone => {
    const priceNumber = parseInt(phone.price.replace("$", ""));
    return priceNumber < 300;
});



document.querySelector("#name-product").textContent = promosHeroImg[0].name;
document.querySelector("#type-product").textContent = promosHeroImg[0].type;


// Adding promotions
const promotionsSection = document.querySelectorAll("#promotions > div");

promotionsSection.forEach(div => {
    const nameSection = document.createElement("h3");
    const typeSection = document.createElement("h4");
    const buttonSection = document.createElement("button");


});




