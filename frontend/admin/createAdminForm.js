import { createEl } from "../scripts/utils/utils.js"
export function createAdminForm() {
    const root = document.getElementById("root")
    const form = createEl("form",{className:"adminForm"})
    const inputUser = createEl("input", {className:"user", type: "text", placeholder:"Admin Username"})
    const inputPW = createEl("input", {className: "pw", type:"password", placeholder:"Password"})
    const button = createEl("button", {className: "logIn", innerHTML: "Log In"})
    const back = createEl("a",{href:"/", className:"admin"})
    const backBtn = createEl("button",{innerHTML:"Go Back"})
    back.append(backBtn)
    form.append(inputUser, inputPW, button)
    root.append(back)
    return form
}
