import { fillContent } from "./fillConItems.js";

export function modifyHandler() {
  const modifyBtn = document.querySelectorAll(".modify");
  for (const button of modifyBtn) {
    button.addEventListener("click", async () => {
      const modifiesInput = button.closest("div").querySelector("input").value;
      const btnS = button.closest(".id").querySelector("p.ids").textContent;
      const prodId = btnS.trim().split(" ").pop();
      const modifiesData = button.closest("div").querySelector("p").textContent;
      const compId = modifiesData.trim().split(",").shift()
      
      const req = await fetch(`/coffee/${prodId}/comps/${compId}/value/${modifiesInput}`, {method: 'POST'})
      fillContent()
      });
  }
}
