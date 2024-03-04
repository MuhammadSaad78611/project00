"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var n1 = parseInt(prompt("enter your first number:"));
var n2 = parseInt(prompt("enter your second number:"));
var op = (prompt("ente your operator:"));
if (op == '+') {
    console.log("$(n1+n2)");
}
if (op == '-') {
    console.log("".concat(n1 - n2));
}
if (op == '*') {
    console.log("".concat(n1 * n2));
}
if (op == '/') {
    console.log("".concat(n1 / n2));
}
else {
    console.log("please enter correct opperator");
}
