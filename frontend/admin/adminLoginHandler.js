import { deleteProduct } from "./deleteProduct.js"
import { createAdminPage } from "./createAdminPage.js";
import { itemsPostHandler } from "./itemsPostHandler.js";
import { fillContent } from "./fillConItems.js";
import { removeBtnHandler } from "./removeBtnHandler.js";
import { getOrders } from "./getOrders.js";
export function adminLoginHandler() {
    const form = document.querySelector(".adminForm");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const username = document.querySelector(".user").value;
      const pw = document.querySelector(".pw").value;
      const data = { username: username, pw: pw };
      const req = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (req.status === 202) {
        const root = document.getElementById("root");
        root.innerHTML = "";
        root.append(createAdminPage())
        itemsPostHandler()
        deleteProduct()
        fillContent()
        removeBtnHandler()
        root.append(await getOrders())
      } else {
        console.log(req)
        alert("Wrong Password");
      }
    });
  }
  