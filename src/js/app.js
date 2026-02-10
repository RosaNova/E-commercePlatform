const openShoppingBtn = document.getElementById("openShoppingBtn");
const shoppingContainer = document.getElementById("shoppingContainer");
const closeShoppingBtn = document.getElementById("closeShoppingBtn");

openShoppingBtn.addEventListener("click", () => {
    shoppingContainer.classList.remove("right-[-100%]");
    shoppingContainer.classList.add("right-0");
});

closeShoppingBtn.addEventListener("click", () => {
    shoppingContainer.classList.remove("right-0");
    shoppingContainer.classList.add("right-[-100%]");
});