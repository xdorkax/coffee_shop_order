import { fillContent } from "./fillConItems.js";

export function removeBtnHandler() {
  const buttons = document.querySelectorAll('.remove');
  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const pElement = button.closest("div").querySelector("p.ids").textContent;
      const id = pElement.trim().split(" ").pop();
      const promptResponse = prompt(`Answer "yes" if you want to delete item with ID: ${id}!`);

      if (promptResponse === "yes") {
        const req = await fetch(`/coffees/${id}`, {
          method: "DELETE"
        });

        if (req.status === 200) {
          alert(`Deleted item with ID: ${id}`);
        } else {
          alert(`Failed to delete item with ID: ${id}`);
        }

        fillContent();
      }
    });
  });
}
