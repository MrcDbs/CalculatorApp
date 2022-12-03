'use strict';

let from = document.getElementById("selectOne");
let to = document.getElementById("selectTwo");

let getButton = document.querySelector("form button");

// const valToNum = Number(val);
let result = "";
function convert() {
    let val = document.getElementById("ammount").value;
    val = Number(val);


    // let result = "Format not valid";
    // console.log(val);
    if (isNaN(val)) {

        result = "Please insert only Numbers";
    }
    else if (from.value === "USD" && to.value === "EUR") {
        result = `<p> ${val} ${from.value} = ${val * 0.88} ${to.value}</p>`;
    }
    else if (from.value === "USD" && to.value === "GBP") {
        result = `<p> ${val} ${from.value} = ${val * 0.74} ${to.value}</p>`;
    }
    else if (from.value === "USD" && to.value === "AUD") {
        result = `<p> ${val} ${from.value} = ${val * 1.39} ${to.value}</p>`;
    }

    document.getElementById("par").innerHTML = result;
}

getButton.addEventListener("click", convert, false);

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}