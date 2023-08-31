import { get,createEl } from "../scripts/utils/utils.js";
import { removeBtnHandler } from "./removeBtnHandler.js";
import { modifyHandler } from "./modifyHandler.js";
import { getOrders } from "./getOrders.js";
export async function fillContent() {
    const avProdListCon = document.querySelector(".avProdListCon");
    avProdListCon.innerHTML = ""
    const availableIds = await get("/coffees/availableIds");
  
    const data = await get("/coffees");
  
    availableIds.forEach((id, index) => {
      const coffee = data.find((item) => item.id === id);
  
      const cardContainer = createEl("div", {
        id: `card${index + 1}-container`,
        className: "card",
      });
      const img = createEl("img", {
        id: `img${index + 1}`,
        src: `/coffees/pictures/${id}.jpg`,
      });
      const container = createEl("div", { className:"id", id: `container${index + 1}` });
      const components = createEl("div", {id:`comp${index + 1}`})
      
      if(coffee.components){
      for(const key of coffee.components){
        const comp = createEl("div",{className:"comp"})
        const p = createEl("p",{textContent: key})
        const compInput = createEl("input", {type:"text", name:"component", placeholder:"New value"})
        const compBtn = createEl("button", {className:"modify", type:"submit", innerHTML:"Modify"})
        comp.append(p,compInput,compBtn)
        components.append(comp)
      }
    }
      const button = createEl("button", {
        className: "remove",
        id: `button${index + 1}`,
        type: "submit",
        textContent: "Remove",
      });
      const name = createEl("p", { textContent: coffee.name });
      const price = createEl("p", { textContent: coffee.price });
      const ids = createEl("p",{className: "ids",textContent: "id: "+coffee.id})
  
      container.append(price, ids, button, components);
      cardContainer.append(img, container);
      cardContainer.prepend(name);
      avProdListCon.append(cardContainer);
      const root = document.querySelector("#root")
      root.append(avProdListCon)
    });
   
    removeBtnHandler()
    modifyHandler()
}