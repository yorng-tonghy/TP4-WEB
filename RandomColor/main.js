const generate = document.getElementById("generate");
const random = document.getElementById("random_num");
const color = document.getElementById("color");
const reset = document.getElementById("reset");
const wrapper_color= document.getElementById("wrapper_color");
const demo = document.getElementById("demo");
const small_box= document.getElementById("small_box");

const boxColor = document.querySelector(".box__color");
// const StoreData = document.querySelector(".storeData");


const colors = document.querySelector(".colors");
const small =document.getElementById("small");
let arr=[];


generate.addEventListener('click',()=>{
    // let a = Math.random();
    // console.log(a);

    let a="#";
    let myColor=a+myGenerate(6);
    random.innerHTML=myColor;
    wrapper_color.style.backgroundColor=myColor;
    demo.innerHTML=myColor;
    small_box.style.display="block";
    small_box.style.backgroundColor=myColor;


    arr.push(myColor);
    // document.write(JSON.stringify(arr));
    const p = document.createElement("p");
    const div = document.createElement("div");
    const container = document.createElement("div");
    p.textContent = myColor;
    container.appendChild(p);
    container.appendChild(div);
    colors.appendChild(container);
    div.style.backgroundColor=myColor;
    div.style.width="1rem";
    div.style.height="1rem";
    container.style.display="flex";
    colors.style.flexDirection="column";
    
    // for (const value of arr) {
    //     p.textContent = value;
    // }

    demo.style.display="block";
   small_box.style.display="block";
   colors.style.display="block";
   div.style.display="block";
    



    

    

})

reset.addEventListener('click',()=>{
    reset1();
})
function myGenerate(length) {
    let result = '';
    const characters = 'ABCDEF0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function reset1(){
   demo.style.display="none";
   small_box.style.display="none";
   colors.style.display="none";
   div.style.display="none";

}



