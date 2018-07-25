"use strict";

var _factory = require("@duketest111/calc");

var calc = _factory.create();

calc.clear();
calc.add(20);
calc.sub(5);
calc.mul(4);
var result = calc.div(2);
console.log(result);