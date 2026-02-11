const openShoppingBtn = document.getElementById("openShoppingBtn");
const shoppingContainer = document.getElementById("shoppingContainer");
const closeShoppingBtn = document.getElementById("closeShoppingBtn");
const shoppingBody = document.getElementById("shoppingBody");
const allProducts = document.getElementById("allProducts");


openShoppingBtn.addEventListener("click", () => {
    shoppingContainer.classList.remove("right-[-100%]");
    shoppingContainer.classList.add("right-0");
});

closeShoppingBtn.addEventListener("click", () => {
    shoppingContainer.classList.remove("right-0");
    shoppingContainer.classList.add("right-[-100%]");
});



let products = [];

async function fetchProducts() {
    try {
        const response = await fetch('/src/data/product.json');
        products = await response.json();
        renderProducts();
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function generateStarRating(starCount) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(starCount)) {
            starsHTML += `<i data-lucide="star" class="fill-yellow-400 text-yellow-400 w-4 h-4"></i>`;
        } else {
            starsHTML += `<i data-lucide="star" class="text-gray-300 w-4 h-4"></i>`;
        }
    }
    return starsHTML;
}

function renderProducts() {
    allProducts.innerHTML = ""; // Clear existing content
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-card shadow-lg relative rounded-xl p-4";



        productDiv.innerHTML = `
            <button
                class="favorithBtn absolute top-5 right-5 bg-secondary rounded-full p-2 cursor-pointer text-background text-3xl "
                type="button"><i data-lucide="heart"></i></button>
            <img class="rounded-2xl w-full h-48 object-cover"
                src="${product.image}" alt="${product.name}">
            <div class="product-info py-3">
                <div class="flex items-center gap-1 mb-2">
                    ${generateStarRating(product.star)}
                    <span class="text-xs text-secondary/70 ml-1">(${product.star})</span>
                </div>
                <h2 class="text-2xl font-bold text-secondary">${product.name}</h2>
                <p class="text-xl pb-3 font-bold text-secondary">$${product.price.toFixed(2)}</p>
                <button
                    class="bg-secondary w-full rounded-xl p-2 cursor-pointer font-bold text-background text-xl ">Shop
                    Now</button>
            </div>
        `;
        allProducts.appendChild(productDiv);
    });

    // Re-initialize Lucide icons for newly added heart icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}
fetchProducts();