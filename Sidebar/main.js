const icon = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const close = document.getElementById("close-button");
icon.addEventListener('click',()=>{
    sidebar.classList.toggle("toggle");
    // alert("jee;pp")
})
close.addEventListener('click',()=>{
    sidebar.classList.toggle("toggle");
})