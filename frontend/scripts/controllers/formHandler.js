import { createEl } from "../utils/utils.js";

export function formHandler() {
  const buttons = document.querySelectorAll(".add");
  let cartItems = [];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.querySelector("form")
      
      const amountInputs = document.querySelectorAll("#left-container > div > div > input");
      amountInputs.forEach((input) => {
        if(input.value&&input.value != 0){
          form.classList.remove("hideForm")
        };
      });

      const parentDiv = button.parentElement;
      const grandparentDiv = parentDiv.parentElement;

      const h1 = grandparentDiv.querySelector("h1");
      const h6 = grandparentDiv.querySelector("h6");
      const amount = grandparentDiv.querySelector("input");

      const clonedH1 = h1.cloneNode(true);
      clonedH1.name = "name";
      clonedH1.id = "input-type";
      const clonedH6 = h6.cloneNode(true);
      clonedH6.name = "Piece & price";
      clonedH6.id = "input-price";
      const cartCon = document.querySelector(".orderCon");

      if (amount.value && amount.value > 0) {
        const amountValue = parseInt(amount.value);
        const result = parseInt(clonedH6.textContent) * amountValue;
        clonedH6.innerHTML =
          "Amount: " +
          amountValue +
          " piece<br>" +
          "Total price " +
          result +
          "$";

        const existingItem = cartItems.find((item) => item.name === clonedH1.innerHTML);

        if (existingItem) {
          existingItem.amount = amountValue;
          existingItem.totalPrice = result;
        } else {
          cartItems.push({
            name: clonedH1.innerHTML,
            amount: amountValue,
            totalPrice: result,
          });
        }

        cartCon.innerHTML = "";
        cartItems.forEach((item) => {
          const itemContainer = createEl("div", { className: "cart-item" });
          const itemName = createEl("h4", { textContent: item.name });
          const itemAmount = createEl("p", { textContent: "Amount: " + item.amount });
          const itemTotalPrice = createEl("p", { textContent: "Total price: " + item.totalPrice + "$" });

          itemContainer.append(itemName, itemAmount, itemTotalPrice);
          cartCon.appendChild(itemContainer);
        });
      }
    });
  });
}
