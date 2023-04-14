
let output1 = document.getElementById("input1");
let output2 = document.getElementById("input2");

let title = document.getElementById("title");



function add() {
    if(input1.value > 0 && input2.value) {
    let answer = Number(output1.value) + Number(output2.value);
    title.innerText = answer
} else {
    title.innerText = "Getal is te laag"
}
}

function minus() {
    if(input1.value > 0 && input2.value) {
    let answer = output1.value - output2.value;
    title.innerText = answer;
} else {
    title.innerText = "Getal is te laag"
}

}

function divide() {
    if(input1.value > 0 && input2.value) {
    let answer = output1.value / output2.value;
    title.innerText = answer;
} else {
    title.innertext = answer;
}

}

function multiply() {
    if(input1.value > 0 && input2.value) {
 let answer = output1.value * output2.value;
title.innerText = answer;
} else {
    title.innerText = answer;
}
}