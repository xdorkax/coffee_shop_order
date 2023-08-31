import { createEl } from "../utils/utils.js";

export function createHeader() {
  const header = createEl("header", "header");
  const div = createEl("div", { id: "text", textContent: "Coffee Shop" });
  const logo = createEl("img", { classList: "logo", src: "../media/logo.png" });
  const admin = createEl("a",{href:"/admin", className:"admin"})
  const adminbtn = createEl("button",{innerHTML:"Admin"})
  admin.append(adminbtn)
  div.prepend(logo);
  header.append(div, admin);
  return header;
}

export function createLeftContainer() {
  const leftContainer = createEl("div", { id: "left-container" });
  return leftContainer;
}

export function createRightContainer() {
  const rightContainer = createEl("div", { id: "right-container" });
  const form = createEl("form", { className: "hideForm" });

  const cartCon = createEl("div", { className: "cartCon" });
  cartCon.innerHTML = "<h2>Cart:</h2>";

  const orderCon = document.createElement("div");
  orderCon.classList = "orderCon";
  orderCon.id = "orderCon" 

  const trash = createEl("img", { className: "trash", src: "../media/trash.png" });

  const cart = document.createElement("img");
  cart.src = "../media/cart.png";
  cart.classList = "cart";

  cartCon.append(trash, cart);

  const labelname = createEl("label", {
    id: "label-name",
    textContent: "Name:",
  });
  const inputName = createEl("input", {
    id: "input-name",
    type: "text",
    placeholder: "Enter your name",
    name: "FullName",
  });
  const labelZip = createEl("label", {
    id: "label-zip",
    textContent: "Zip Code:",
  });
  const inputZip = createEl("input", {
    id: "input-zip",
    type: "text",
    placeholder: "Enter your zip code",
    name: "Zip-Code",
  });
  const labelCity = createEl("label", {
    id: "label-city",
    textContent: "City:",
  });
  const inputCity = createEl("input", {
    id: "input-city",
    type: "text",
    placeholder: "Enter your city",
    name: "City",
  });
  const labelStreet = createEl("label", {
    id: "label-street",
    textContent: "Street:",
  });
  const inputStreet = createEl("input", {
    id: "input-street",
    type: "text",
    placeholder: "Enter your street",
    name: "street",
  });
  const labelHouseNumber = createEl("label", {
    id: "label-number",
    textContent: "House Number:",
  });
  const inputHouseNumber = createEl("input", {
    id: "input-number",
    type: "text",
    placeholder: "Enter your House number",
    name: "Number",
  });
  const labelEmail = createEl("label", {
    id: "label-email",
    textContent: "Email:",
  });
  const inputEmail = createEl("input", {
    id: "input-email",
    type: "text",
    placeholder: "Enter your email",
    name: "e-mail",
  });
  const labelPhone = createEl("label", {
    id: "label-phone",
    textContent: "Phone Number:",
  });
  const inputPhone = createEl("input", {
    id: "input-phone",
    type: "text",
    placeholder: "Enter your phone number",
    name: "Phone",
  });

  const button = createEl("button", {
    id: "submit",
    textContent: "Send Your Order",
  });

  form.append(
    cartCon,
    orderCon,
    labelname,
    inputName,
    labelZip,
    inputZip,
    labelCity,
    inputCity,
    labelStreet,
    inputStreet,
    labelHouseNumber,
    inputHouseNumber,
    labelEmail,
    inputEmail,
    labelPhone,
    inputPhone,
    button
  );

  rightContainer.append(form);

  return rightContainer;
}
