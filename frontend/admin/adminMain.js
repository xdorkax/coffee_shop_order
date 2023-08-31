import { createEl } from "../scripts/utils/utils.js";
import { createAdminForm } from "./createAdminForm.js";
import { adminLoginHandler } from "./adminLoginHandler.js";

function main(){
    const root = document.getElementById("root")
    const h1 = createEl("h1", {innerHTML:"Coffee Admin Page"})
    
    root.append(h1,createAdminForm())
    adminLoginHandler()
}
main()