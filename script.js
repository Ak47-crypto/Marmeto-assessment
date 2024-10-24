"use strict";
console.log("====================================");
console.log("Connected");
console.log("====================================");

async function handleFetch() {
    try {
        
    
  const response = await fetch(
    "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889"
  );
  if (response.ok) {
    const data = await response.json();
    //  cart img
    const cartImg = document.getElementById("imgCart");
    cartImg.src = data.items[0].image;
    // cart title
    const title = document.getElementById("title");
    title.innerHTML = data.items[0].title;
    // cart price
    const price = document.getElementById("price");
    price.innerHTML = data.items[0].price;
    // cart sub total
    const subTotal = document.getElementById("subTotal");
    subTotal.innerHTML = data.items[0].final_price;

    // cart cart-subTotal
    const cartSubTotal = document.getElementById("cartSubTotal");
    cartSubTotal.innerHTML = subTotal.innerHTML;
    // cart cart-total
    const cartTotal = document.getElementById("cartTotal");
    cartTotal.innerHTML = subTotal.innerHTML;
    const cartButton = document.getElementById("deleteCart");
    cartButton.addEventListener("click", function () {
      const tableRow = document.getElementById("cartItemOne");
      tableRow.style.display = "none";
      cartSubTotal.innerHTML = '0';
      cartTotal.innerHTML = '0';
    });
    // cart input change handle
    const cartInput = document.getElementById("cartInput")
    console.log(cartInput.innerHTML)
    cartInput.addEventListener("input",function(){
        cartSubTotal.innerHTML = cartInput.value?subTotal.innerHTML*cartInput.value:subTotal.innerHTML*1
        cartTotal.innerHTML = cartInput.value?subTotal.innerHTML*cartInput.value:subTotal.innerHTML*1
        console.log(cartInput.value)
    })
    // cart checkout button handle
    const buttonCheckOut = document.getElementById('buttonCheckOut')
    buttonCheckOut.addEventListener('click',function(){
        if(cartTotal.innerHTML!=0)
        alert("Order placed successfully")
        else
        alert("Please add item in your cart")
    })
  }
} catch (error) {
        console.log(error)
        alert("Failed to fetch")
}
}
handleFetch();
