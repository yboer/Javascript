
let output1 = document.getElementById("input1");
let output2 = document.getElementById("input2");

let title = document.getElementById("title");



function add() {
    let answer = Number(output1.value) + Number(output2.value);
    title.innerText = answer;
}

function minus() {
    let answer = output1.value - output2.value;
    title.innerText = answer;

}

function divide() {
    let answer = output1.value / output2.value;
    title.innerText = answer;

}

function multiply() {
 let answer = output1.value * output2.value;
title.innerText = answer;
}