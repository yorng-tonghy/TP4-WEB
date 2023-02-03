const Reset = document.getElementById("reset_btn");
const  Decrease = document.getElementById("decrease_btn");
const Increase = document.getElementById("increase_btn");

const counter = document.getElementById("number");

// let counter1= Number(localStorage.getItem("num")) || 0;

let num = 0 || Number(localStorage.getItem("counter"));
// let color;
// let mycolor =counter.innerHTML.style.color;
counter.textContent= num;
class counter_{
    
    
    constructor(){
    
    }
    resetCounter(){
        Reset.addEventListener("click",()=>{
            
            num=0;
            localStorage.setItem("counter", num)
            counter.innerText = num;
            
        })
    }
    DecreaseCounter(){
        Decrease.addEventListener("click",()=>{
            
            
            num--;
            localStorage.setItem("counter", num)
            counter.innerText = num;
        })
    }
    incrementCounter(){
        num++;
        localStorage.setItem("counter", num)
        counter.innerText = num;
    }

}
// call
var a = new counter_();
// a.reset();
// a.Increase();
// a.Decrease();


Increase.addEventListener("click", () => {
    a.incrementCounter()
})
Decrease.addEventListener("click",()=>{
    a.DecreaseCounter()
})
Reset.addEventListener("click",()=>{
    a.resetCounter()
})

