const BILL_CONTAINER = document.getElementById("bill");
const FIVE_PERCENT_DISCOUNT = document.getElementById("five_discount");
const TEN_PERCENT_DISCOUNT = document.getElementById("ten_discount");
const FIFTEEN_PERCENT_DISCOUNT = document.getElementById("fifteen_discount");
const TWENTY_PERCENT_DISCOUNT = document.getElementById("twenty_discount");
const TWENTYFIVE_PERCENT_DISCOUNT = document.getElementById("twentyfive_discount");
const CUSTOM_DISCOUNT = document.getElementById("custom");

const PEOPLE_HOLDER = document.getElementById("people")

const AMOUNT = document.getElementById("amount");
const TOTAL_AMOUNT = document.getElementById("total_amount");



BILL_CONTAINER.value = 100;


let bill = BILL_CONTAINER.value;
let selected_discount = "FIVE";
let discount_amount = 5;
let people = 1;

PEOPLE_HOLDER.value= people

let tip = bill * discount_amount / 100;
let tipPerPerson = tip / people;


function calculate() {
    tip = bill * discount_amount / 100;
    tipPerPerson = tip / people;

    AMOUNT.innerHTML = tipPerPerson;
    TOTAL_AMOUNT.innerHTML = tip;
}


BILL_CONTAINER.addEventListener("keypress", () => {
    if(BILL_CONTAINER.value < 100){
        BILL_CONTAINER.value = 100
    }
    bill = BILL_CONTAINER.value;
    calculate();
})


PEOPLE_HOLDER.addEventListener("keypress", () => {
    if(PEOPLE_HOLDER.value < 1){
        PEOPLE_HOLDER.value = 1
    }
    people = PEOPLE_HOLDER.value;
    calculate();
})

function deselectAll() {
    calculate();
    FIVE_PERCENT_DISCOUNT.classList.remove("selected");
    TEN_PERCENT_DISCOUNT.classList.remove("selected");
    FIFTEEN_PERCENT_DISCOUNT.classList.remove("selected");
    TWENTY_PERCENT_DISCOUNT.classList.remove("selected");
    TWENTYFIVE_PERCENT_DISCOUNT.classList.remove("selected");
}

function discountRenderer() {

    CUSTOM_DISCOUNT.removeEventListener("keypress", tapCustomAmount)

    deselectAll();

    switch(selected_discount){
        case "FIVE": 
            FIVE_PERCENT_DISCOUNT.classList.add("selected");
            break;
        
        case "TEN": 
            TEN_PERCENT_DISCOUNT.classList.add("selected");
            break;

        case "FIFTEEN": 
            FIFTEEN_PERCENT_DISCOUNT.classList.add("selected");
            break;

        case "TWENTY": 
            TWENTY_PERCENT_DISCOUNT.classList.add("selected");
            break;
        case "TWENTYFIVE": 
            TWENTYFIVE_PERCENT_DISCOUNT.classList.add("selected");
            break;
    }
}
discountRenderer();

function tapCustomAmount(){
    let val = Number(CUSTOM_DISCOUNT.value);
    if(val < 0){
        CUSTOM_DISCOUNT.value = 0
    }
    if(val > 100){
        CUSTOM_DISCOUNT.value = 100
    }
    discount_amount = CUSTOM_DISCOUNT.value;
}

FIVE_PERCENT_DISCOUNT.addEventListener("click", () => {
    discount_amount = 5;
    selected_discount = "FIVE";
    discountRenderer()
});


TEN_PERCENT_DISCOUNT.addEventListener("click", () => {
    discount_amount = 10;
    selected_discount = "TEN";
    discountRenderer()
});

FIFTEEN_PERCENT_DISCOUNT.addEventListener("click", () => {
    discount_amount = 15;
    selected_discount = "FIFTEEN";
    discountRenderer()
});

TWENTY_PERCENT_DISCOUNT.addEventListener("click", () => {
    discount_amount = 20;
    selected_discount = "TWENTY";
    discountRenderer()
});

TWENTYFIVE_PERCENT_DISCOUNT.addEventListener("click", () => {
    discount_amount = 25;
    selected_discount = "TWENTYFIVE";
    discountRenderer()
});

CUSTOM_DISCOUNT.addEventListener("click", () => {
    selected_discount = "CUSTOM"
    discount_amount = CUSTOM_DISCOUNT.value;
    CUSTOM_DISCOUNT.addEventListener("keypress", tapCustomAmount);
    deselectAll();
})

calculate();