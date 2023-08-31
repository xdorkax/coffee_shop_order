import { fillContent } from "./fillConItems.js";
export function itemsPostHandler() {
  const form = document.querySelector(".newCoffee");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const inputFile = document.querySelector(".fileInput");
    const file = inputFile.files[0];
    if (!file) {
      alert("Error: No image selected.");
      return;
    }

    const data = new FormData(form);
    let isFormIncomplete = false;
    for (const value of data.values()) {
      if (value === "") {
        isFormIncomplete = true;
        break;
      }
    }
    if (isFormIncomplete) {
      alert("Error: Incomplete form data.");
      return;
    }

    const req = await fetch("/coffee/", {
      method: "POST",
      body: data
    });

    const picData = new FormData();
    picData.append("file", file);
    const picReq = await fetch("/coffee/pictures", {
      method: "POST",
      body: picData
    });
    form.reset()
    if(picReq.status===200){
      alert("Saved")
    }
    fillContent()
  });
 
}
