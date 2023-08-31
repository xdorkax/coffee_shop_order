import { fillContent } from "./fillConItems.js"

export function deleteProduct(){
 const delForm = document.querySelector(".delForm")
 delForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    
    
    const delInput = document.querySelector(".delInput").value
    const req = await fetch(`/coffees/${delInput}`, {
        method: "DELETE"
      })
    if(req.status===200){
        alert("Deleted id:"+delInput+" product")
    }
    fillContent()
 })
}