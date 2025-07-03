function toggleCart(button) {
    if (button.textContent === "add to cart") {
        button.textContent = "remove from cart";
        button.style.backgroundColor = "red";
        button.style.width="150px"; // Optional styling change
    } else {
        button.textContent = "add to cart";
        button.style.backgroundColor = "";
        button.style.width="100px"; // Reset styling
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach(button => {
        button.addEventListener("click", function() {
            toggleCart(this);
        });
    });
});