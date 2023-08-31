import { post } from "../utils/utils.js";

export function saveData() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const newData = {};

    const formElements = Array.from(form.elements);
    for (let element of formElements) {
      if (element.tagName === "INPUT" && element.type !== "submit") {
        newData[element.name] = element.value;
      }
    }

    const h1 = document.querySelector("#input-type");
    const h6 = document.querySelector("#input-price");
    const orderCon = document.querySelector(".orderCon");

    newData["Product"] = orderCon.textContent;
    if (orderCon.textContent === "") {
      alert("Please select a product!");
    }

    await post(`/orders/`, newData);
    form.reset();
    orderCon.innerHTML = "";
  });
}
