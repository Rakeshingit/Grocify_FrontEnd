const totalPrice = document.getElementById("totalPrice");
const applesQ = document.getElementById("applesQ");
const bananasQ = document.getElementById("bananasQ");
const mangoesQ = document.getElementById("mangoesQ");
const pineapplesQ = document.getElementById("pineapplesQ");
const pineapplesbtn = document.getElementById("pineapplesbtn");
const mangoesbtn = document.getElementById("mangoesbtn");
const bananasbtn = document.getElementById("bananasbtn");
const applesbtn = document.getElementById("applesbtn");

// For cart

export let shoppingCart = {
  items: {},
  totalPrice: 0,
};

// totalBill();
// billtext.innerHTML = `₹${shoppingCart.totalPrice}`;

const FRUITS_FOR_SALE = [
  {
    Id: 1,
    name: "Apple",
    price: 12.3,
    quantity: 1,
  },
  {
    Id: 2,
    name: "Banana",
    price: 8,
    quantity: 1,
  },
  {
    Id: 3,
    name: "Mango",
    price: 45.9,
    quantity: 1,
  },
  {
    Id: 4,
    name: "Pineapple",
    price: 14,
    quantity: 1,
  },
];

function addItems(item) {
  for (let i = 0; i < shoppingCart.items.length; i++) {
    // let currentItem = shoppingCart.items[i];
    if (shoppingCart.items[i].name === item.name) {
      // shoppingCart.items[i].quantity += item.quantity;
      totalBill();
      return;
    }
  }
  shoppingCart.items = item;
  totalBill();
}

function removeItems(item) {
  for (let i = 0; i < shoppingCart.items.length; i++) {
    if (shoppingCart.items[i].name === item.name) {
      shoppingCart.items.splice(i, 1);
      return;
    }
  }
}

function totalBill() {
  let invoice = 0;
  for (let item in shoppingCart.items) {
    // if(shoppingCart.totalPrice === 0)
    invoice +=
      shoppingCart.items[item].price * shoppingCart.items[item].quantity;
    shoppingCart.totalPrice = invoice.toFixed(2);
    // else if(shoppingCart.items.quantity){
    // shoppingCart.totalPrice += shoppingCart.items[item].price*shoppingCart.items[item].quantity;
  }
  // return ;
}

export function addingitem(fruit, qt, addBtn) {
  const filtered = FRUITS_FOR_SALE.find((obj) => obj.name === fruit);

  if (filtered) {
    filtered.quantity = qt;

    addBtn.textContent = "Added to Cart!";
    // addBtn.style.background = "grey";
    console.log(filtered);
  } else window.alert("Can not get the item");

  // addItems(filtered);

  fetch("http://127.0.0.1:8901/update-cart", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(filtered),
  })
    // .then(response => response.json())
    .then((data) => console.log("Cart update successful", data))
    .catch((err) => console.log("Error reaching the server", err));
}
