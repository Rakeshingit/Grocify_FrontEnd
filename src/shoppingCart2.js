export const shoppingCart = {
  items: {},
  totalPrice: 0,
};

function addItems(item) {
  for (let i = 0; i < shoppingCart.items.length; i++) {
    if (shoppingCart.items[i].name === item.name) {
      // shoppingCart.items[i].quantity += item.quantity;
      totalBill();
      return;
    }
  }
  shoppingCart.items = item;
  totalBill();
}

// export async function additem(item) {
//   addItems(item);

//   let response = await fetch("http://127.0.0.1:8901/update-cart", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(shoppingCart.items),
//   });
//   let data = await response.json();
//   console.log(data);
// }

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

export function addingitem(fruit) {
  let newName = fruit + "Q";
  let newbtn = fruit + "btn";
  // window[fruit].quantity = window[newName].value;
  // window[newbtn].textContent = "Done!";
  // window[newbtn].disabled = true;
  // window[newbtn].style.background = "grey";
  // console.log(window[fruit]);
  // addItems(null);
  console.log(fruit);

  // fetch("/update-cart", {
  //   method: "POST",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify(shoppingCart.items),
  // })
  //   // .then(response => response.json())
  //   .then((data) => console.log("Cart update successful", data))
  //   .catch((err) => console.log("Error reaching the server", err));
}
