import { createEl } from "../scripts/utils/utils.js";
export function createAdminPage() {
    const con = createEl("main", {className: "con"})
    const newCoffee = createEl("form",{className:"newCoffee" })
    const coffeeName = createEl("input",{className:"coffeeName", placeholder:"Coffee Name", type:"text", name:"name"})
    const coffeeDesc = createEl("textarea", {className:"coffeeDesc", name:"type", placeholder:"Description"})
    const components = createEl("textarea", {className:"coffeeDesc", name:"components", placeholder:"List of components (use ',' if add more than 1)"})
    const price = createEl("input", {type:"text",placeholder:"Price", className:"price", name:"price"})
    const image = createEl("input", {type:"file", className: "fileInput", name:"fileInput"})
    const button = createEl("button",{innerHTML:"SAVE"})

    const root = document.getElementById("root")
    const backBtn = createEl("button",{innerHTML:"Go Back"})
    const back = createEl("a",{href:"/", className:"admin"})
    newCoffee.append(coffeeName,coffeeDesc,components,price,image,button)
    con.append(newCoffee)

    const h1 = createEl("h1", {innerHTML:"Coffee Admin Page"})
    
    

    const h2Del = createEl("h2", {className:"h2Del", innerHTML:"Delete products"})
    const delForm = createEl("form",{className:"delForm"})
    const delInput = createEl("input", {type:"number", className:"delINput", placeholder:"Please enter product id!"})
    const delBtn = createEl("button", {className:"delBtn", innerHTML:"Delete"})
    delForm.append(h2Del,delInput,delBtn)
    con.append(delForm)

    const avProdListCon = createEl("div",{className:"avProdListCon"})
    root.append(avProdListCon)

    const orderListCon = createEl("div",{className:"orderListCon"})
    root.append(orderListCon)

    back.append(backBtn)
    root.append(h1,back)

    return con
}