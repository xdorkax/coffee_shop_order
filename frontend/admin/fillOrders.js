import { get,createEl } from "../scripts/utils/utils.js";
export async function fillContent() {
    const orderListCon = document.querySelector(".orderListCon");
    orderListCon.innerHTML = ""
    const availableIds = await get("/orders/availableIds");
  
    const data = await get("/orders/");
  
    availableIds.forEach((id, index) => {
      const coffee = data.find((item) => item.id === id);
  
      const cardContainer = createEl("div", {
        id: `card${index + 1}-container`,
        class: "card",
      });
      const img = createEl("img", {
        id: `img${index + 1}`,
        src: `/coffees/pictures/${id}.jpg`,
      });
      const container = createEl("div", { id: `container${index + 1}` });
      const button = createEl("button", {
        className: "remove",
        id: `button${index + 1}`,
        type: "submit",
        textContent: "Remove",
      });
      const name = createEl("p", { textContent: coffee.name });
      const price = createEl("p", { textContent: coffee.price });
      const ids = createEl("p",{className: "ids",textContent: "id: "+coffee.id})
  
      container.append(price, ids, button);
      cardContainer.append(img, container);
      cardContainer.prepend(name);
      orderListCon.append(cardContainer);
      const root = document.querySelector("#root")
      root.append(orderListCon)
    });
    removeBtnHandler()
}