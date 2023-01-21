
let countEl=document.getElementById("count-el")
let  saveEl=document.getElementById("save-el")
//increment button
let count=0
 function incremnt(){     
count=count+1
countEl.innerText=count

console.warn("The Button is clicked")  
}

//save button
function save(){
    
    let count_str=count+" -"
    saveEl.innerText+=count_str
   countEl.innerText=0
   count=0
}

 //welcome el message

 welcomeEl=document.getElementById("welcome-El");
 name="Robert"
 greeting="Welcome to Google"
 welcomeEl.innerText=greeting + " " + name





