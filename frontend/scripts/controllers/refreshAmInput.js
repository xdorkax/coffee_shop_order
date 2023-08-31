export function refreshAmInput() {
    const amountInputs = document.querySelectorAll("#left-container > div > div > input");
  
    const buttons = document.querySelectorAll(".add");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        amountInputs.forEach((input) => {
          input.value = "";
        });
      });
    });
  }
  