const products = [
    { name: "My First Fire", img: "midterm/images/Midterm/first fire.webp" },
    { name: "Handy Hand", img: "midterm/images/Midterm/handyhand.webp" },
    { name: "NapSack", img: "midterm/images/Midterm/napsack.webp" },
    { name: "Hot Tub Wildlife Feeder", img: "midterm/images/Midterm/hot tub.webp" },
    { name: "Toilet Meadow", img: "midterm/images/Midterm/toilet meadow.webp" },
    { name: "Pudding Pouch", img: "midterm/images/Midterm/pudding pouch.webp" }
];

const productList = document.getElementById("product-list");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<img src="${product.img}" alt="${product.name}"><p>${product.name}</p>`;
    productList.appendChild(productDiv);
});
