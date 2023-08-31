export function clearCart() {
  const trash = document.querySelector(".trash");
  const orderCon = document.querySelector("#orderCon");
  trash.addEventListener("click", () => {
    orderCon.innerHTML = "";
    orderCon.classList.remove("newOrderCon")
  });
}
