const products = [
  { id: 1, name: "APPLE", price: 34 },
  { id: 2, name: "MANGO", price: 50 },
  { id: 3, name: "BANANA", price: 75 },
];

let cart = {}; // Object to track product quantities

// Display products on homepage
const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    root.appendChild(card);
  });
};

// Add product to cart
const addToCart = (id) => {
  const currentQty = cart[id] ?? 0;
  cart = {
    ...cart,
    [id]: currentQty + 1
  };
  console.log(cart); // Optional: For testing
};

// Display cart content
const dispCart = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Your Cart</h2>";

  let orderTotal = 0;
  let cartHtml = "";

  for (const id in cart) {
    const product = products.find(p => p.id == id);
    const qty = cart[id];
    const total = qty * product.price;
    orderTotal += total;

    cartHtml += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p>
          Quantity:
          <button onclick="decreaseQty(${product.id})">−</button>
          ${qty}
          <button onclick="increaseQty(${product.id})">+</button>
        </p>
        <p>Total: ₹${total}</p>
      </div>
    `;
  }

  cartHtml += `<h3>Order Value: ₹${orderTotal}</h3>`;
  root.innerHTML += cartHtml;
};

// Increase quantity
const increaseQty = (id) => {
  const currentQty = cart[id] ?? 0;
  cart = { ...cart, [id]: currentQty + 1 };
  dispCart();
};

const decreaseQty = (id) => {
  const currentQty = cart[id];
  if (currentQty > 1) {
    cart = { ...cart, [id]: currentQty - 1 };
  } else {
    const { [id]: _, ...rest } = cart;
    cart = rest;
  }
  dispCart();
};
