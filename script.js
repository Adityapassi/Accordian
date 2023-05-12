// To get All the Accordian 
let accordian = document.querySelectorAll(".accordian")

// Adding "Click" event on all the Accordian 
accordian.forEach((val) => {
   let title=val.querySelector(".acordian-title")
//    let body = val.querySelector(".accordian-body") 

    title.addEventListener("click",()=>{
        for(i=0;i< accordian.length;i++){
            if(accordian[i] != val){
                accordian[i].classList.remove("active")
            }else{
                accordian[i].classList.toggle("active")
            }
        }
    })
    
})