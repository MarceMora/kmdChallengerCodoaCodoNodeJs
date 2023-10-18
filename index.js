const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const quantity = document.querySelector("#quantity");


add.addEventListener("click", () => quantity.value = Number( quantity.value) +1 );
subtract.addEventListener("click", () =>{
    const quantityValue = Number(quantity.value);

    if(quantityValue > 0){
        quantity.value = quantityValue - 1;
    } else{
        quantity.value = 0;
     }
});