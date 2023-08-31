import { createEl } from "../scripts/utils/utils.js";
import { createSwitch } from "./createSwitch.js";

export async function getOrders() {
  const reqA = await fetch("/orders/availableIds");
  const resA = await reqA.json();

  const ordersCon = createEl("div", { className: "orders-con" });

  for (const data of resA) {
    const reqB = await fetch(`/orders/${data}`);
    const resB = await reqB.json();
    console.log(resB);

    const orderCard = createEl("div", { className: "order-card" });
    const orderStatus = createEl("p",{className: "order-status", innerHTML: "Status: "+resB.status})
    const orderDate = createEl("p", { className: "order-data", innerHTML: resB.date });
    const orderId = createEl("p", { className: "order-id", innerHTML: JSON.stringify(resB.id) });
    const customer = createEl("div", { className: "customer" });
    const switchStatus = createSwitch()
    switchStatus.name = resB.id

    for (const [formKey, formValue] of Object.entries(resB.formData)) {
      const formDataItem = createEl("p", { innerHTML: `${formKey}: ${formValue}` });
      customer.append(formDataItem);
    }
    orderStatus.append(switchStatus)
    orderCard.append(orderStatus,orderDate, orderId, customer);
    ordersCon.append(orderCard);
  }

  return ordersCon;
}
