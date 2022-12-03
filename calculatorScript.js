'use strict'
let res = document.getElementById("res");
// let numButtons = document.querySelectorAll("input");
const container = document.querySelector(".buttons");
const switchContainer = document.querySelector('.LDSwitch');
let numButtons = container.querySelectorAll("input");
let switchToggle = switchContainer.querySelectorAll('input');
let frame = document.getElementById('frameId');
let bodyId = document.getElementById('bodyId');
let labels = document.getElementsByClassName('toggle-lab');
let operatorButton = document.getElementsByClassName('operator');
let doit = document.getElementById('doit');
let clear = document.getElementById('clear');
let linkId = document.getElementById('linkId');
let nums = document.getElementsByClassName('num');
const changeStyleNum = (param) => {
    for (let num of nums) {
        num.style.boxShadow = '8px 8px 9px ' + param;
        num.style.border = '1px solid ' + param;
    }


}
console.log('LABELS LENGTH ', operatorButton.length);
const changeMode = (param) => {
    if (param === 'L') {
        frame.style.backgroundColor = '#f2a50a';
        frame.style.boxShadow = '8px 8px 9px black';
        frame.style.border = '1px solid black';
        bodyId.style.backgroundColor = '#e6d097';
        labels[0].style.color = 'black';
        labels[1].style.color = 'black';
        doit.style.backgroundColor = '#999388';
        clear.style.backgroundColor = '#999388';
        doit.addEventListener('touchstart', () => {
            doit.style.backgroundColor = '#cfab4a';
            doit.style.boxShadow = 'none'
        })
        doit.addEventListener('touchend', () => {
            doit.style.backgroundColor = '#999388';
            doit.style.boxShadow = '8px 8px 9px black'
        })
        clear.addEventListener('touchstart', () => {
            clear.style.backgroundColor = '#cfab4a';
            clear.style.boxShadow = 'none'
        })
        clear.addEventListener('touchend', () => {
            clear.style.backgroundColor = '#999388';
            clear.style.boxShadow = '8px 8px 9px black'
        })
        for (let bt of operatorButton) {
            bt.style.backgroundColor = '#999388'
            bt.style.boxShadow = '8px 8px 9px black'
            bt.addEventListener('touchstart', () => {
                bt.style.backgroundColor = '#cfab4a';
                bt.style.boxShadow = 'none'
            })
            bt.addEventListener('touchend', () => {
                bt.style.backgroundColor = '#999388';
                bt.style.boxShadow = '8px 8px 9px black'
            })
        }
        linkId.style.boxShadow = '8px 8px 9px #47463d';
        changeStyleNum('black');
    } else {
        frame.style.backgroundColor = '#3b3a32';
        frame.style.boxShadow = '8px 8px 9px #f2a50a';
        frame.style.border = '1px solid #f2a50a';
        bodyId.style.backgroundColor = 'black';
        labels[0].style.color = '#f2a50a';
        labels[1].style.color = '#f2a50a';
        doit.style.backgroundColor = '#7a63d6';
        clear.style.backgroundColor = '#7a63d6';
        // doit.style.color = '#f2a50a';
        // clear.style.color = '#f2a50a';
        doit.addEventListener('touchstart', () => {
            doit.style.backgroundColor = '#cfab4a';
            doit.style.boxShadow = 'none'
        })
        doit.addEventListener('touchend', () => {
            doit.style.backgroundColor = '#7a63d6';
            doit.style.boxShadow = '8px 8px 9px black'

        })
        clear.addEventListener('touchstart', () => {
            clear.style.backgroundColor = '#cfab4a';
            clear.style.boxShadow = 'none'
        })
        clear.addEventListener('touchend', () => {
            clear.style.backgroundColor = '#7a63d6';
            clear.style.boxShadow = '8px 8px 9px black'

        })
        for (let bt of operatorButton) {
            bt.style.backgroundColor = '#7a63d6';
            bt.style.boxShadow = '8px 8px 9px black';
            bt.style.border = '1px solid black';
            bt.addEventListener('touchstart', () => {
                bt.style.backgroundColor = '#cfab4a';
            })
            bt.addEventListener('touchend', () => {
                bt.style.backgroundColor = '#7a63d6';
            })
        }
        doit.style.border = '1px solid black';
        clear.style.border = '1px solid black';
        linkId.style.boxShadow = '8px 8px 9px #f2a50a';
        changeStyleNum('#f2a50a');
    }

}
switchToggle.forEach(inp => {
    console.log('CI STIAMO AVVICINANDO', inp.value);
    inp.addEventListener('click', (event) => changeMode(inp.value), false);
    console.log(' SIAMO SULLA STRADA GIUSTA');


})

let result = "";
let sign;
let a, b;
function calc(value) {
    console.log('SWITCH TOGGLE', switchToggle[0].checked + ' ' + switchToggle[1].checked);
    switch (value) {
        case ".":
            if (result === '') {
                result = '0.';
                res.value = result;
                resize(result);
            }
            else {
                if (!result.includes(".")) {
                    result += value;
                    res.value = result;
                    resize(result);
                }

            }
            console.log('RESULT = ', result);
            break;
        case "C":
            // alert("value not readed");
            result = result.substring(0, result.length - 1);
            if (result.includes(".")) {
                res.value = result;
                resize(formatNumber(Number(result)));
                // if (result[0] != '0') {
                //     resize(formatNumber(Number(result)));
                // } else {
                //     resize(Number(result));
                // }

            }
            else {
                res.value = formatNumber(Number(result));
                resize(formatNumber(Number(result)));
            }
            break;
        case "+":
        //break;
        case "-":
        //break;
        case "x":
        // break;
        case "/":
            sign = value;
            res.value = sign == "x" ? "*" : value;
            if (result) {
                a = Number(result);
                result = "";
            }
            break;
        case "=":
            if (a && b) {
                switch (sign) { //controllo quale operazione é stata premuta
                    case "+":
                        if (result.includes(".")) {
                            res.value = String(add(a, b));;
                            resize(formatNumber(Number(result)));
                        }
                        else {
                            res.value = formatNumber(add(a, b));//String(add(a, b));
                            resize(formatNumber(add(a, b)));
                            result = String(add(a, b));
                        }
                        break;
                    case "-":
                        res.value = formatNumber(sub(a, b));//String(sub(a, b));
                        resize(formatNumber(sub(a, b)));
                        result = String(sub(a, b));
                        break;
                    case "x":
                        res.value = formatNumber(mul(a, b));//String(mul(a, b));
                        resize(formatNumber(mul(a, b)));//(String(mul(a, b)));
                        result = String(mul(a, b));
                        break;
                    case "/":
                        if (String(div(a, b)).includes(".")) {
                            alert("formatta");
                            res.value = String(div(a, b));;
                            resize(String(div(a, b)));
                        } //DA RIVEDERE LA FORMATTAZIONE DI NUMERI DECIMALI
                        else {
                            res.value = formatNumber(div(a, b));// String(div(a, b));
                            resize(formatNumber(div(a, b)));
                            result = String(div(a, b));
                        }
                        break;
                }
                a = "";
            }
            break;
        default:
            console.log('TYPE OF ', res.value);
            console.log('RESULT = ', result);
            if (formatNumber(Number(result + value)).length > 21) {
                //res.innerHTML = formatNumber(Number(result + value));
                alert("Number exceded 16 digits");
            } else if (res.value === 'NaN') {
                res.value = result;
            }
            else {

                res.value = formatNumber(Number(result + value));
                result += value;
                b = Number(result);
                resize(formatNumber(Number(result + value)));
                console.log(formatNumber(Number(result + value)).length);


            }
        // if (result.length > 10 && result.length < 13) {
        //     res.style.fontSize = "45px";
        // }
        // else if (result.length > 13) {
        //     res.style.fontSize = "35px";
        // }
    }
}
const formatNumber = function (num) {
    //return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return num.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
}

const del = function () {
    res.value = "";
    result = "";
}
numButtons.forEach(button => {
    if (button.value == "C") {
        button.addEventListener("dblclick", del, false);
    }
    button.addEventListener("click", () => {
        calc(button.value);
    }, false);
});
const add = function (a, b) {
    return a + b;
}, sub = function (a, b) {
    return a - b;
}, mul = function (a, b) {
    return a * b;
}, div = function (a, b) {
    return a / b;
};
const resize = function (result) {
    console.log('LENGTH OF RESULT', result.length);
    if (result.length < 14) {
        res.style.fontSize = "145px";
        res.style.paddingBottom = "20px";
    }
    else if (result.length >= 14 && result.length < 16) {
        res.style.fontSize = "130px";
        res.style.paddingBottom = "20px";

    }
    else if (result.length >= 16 && result.length < 17) {
        res.style.fontSize = "125px";
        res.style.paddingBottom = "20px";
    }
    else if (result.length >= 17 && result.length < 18) {
        res.style.fontSize = "115px";
        res.style.paddingBottom = "15px";
    }
    else if (result.length >= 18 && result.length < 20) {
        res.style.fontSize = "110px";
        res.style.paddingBottom = "10px";
    }
    else if (result.length >= 20 && result.length < 23) {
        res.style.fontSize = "100px";
        res.style.paddingBottom = "10px";
    }
}


