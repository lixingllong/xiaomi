setTimeout(function auto(){
    const current = document.querySelector(".img-list .current");
    const next = current.nextElementSibling || document.getElementsByTagName("li")[0]
    current.classList.remove("current")
    next.classList.add("current")
    setTimeout(auto,2000)
},2000)

// 上一张
const btn = document.querySelector(".prev")

const next = document.querySelector(".prev-next .next");

next.addEventListener("click",()=>{
     const current = document.querySelector(".img-list .current");
     const next =
       current.nextElementSibling || document.getElementsByTagName("li")[0];
     current.classList.remove("current");
     next.classList.add("current");
})