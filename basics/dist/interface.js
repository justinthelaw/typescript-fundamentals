"use strict";
var showState = function (person) {
    return person.name + (person.isHungry ? " is hungry!" : " is not hungry!");
};
var anakin = {
    name: "Anakin Skywalker",
    isHungry: true,
};
console.log(showState(anakin));
var anakinNotWalker = {
    name: "Anakin Notwalker",
    isHungry: false,
    children: ["Luke", "Leah"],
};
console.log(showState(anakinNotWalker));
