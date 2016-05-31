'use strict';

//Step:0
//Simplifies a given formula
//For example: Transforms (c(h2o)2(h2o)(co2)4c) to c6h6o11
var extractComponents = function (formula) {
    while (formula.lastIndexOf('(') > -1) {
        formula = extract(formula);
    }
    return group(spread(formula));
}

//Step:1 
//Finds the innermost component and extracts it.
//For example: Transforms (c(h2o)2(h2o)(co2)4c) to (c(h2o)2(h2o)co2co2co2co2c)
//When called recursively it returns: ch2oh2oh2oco2co2co2co2c
var extract = function (component) {
    var pos = component.lastIndexOf('(');
    var pos1 = component.indexOf(')', pos);
    var times = parseInt(component.charAt(pos1 + 1));
    times = isNaN(times) ? 1 : times;
    var substr = component.substring(pos + 1, pos1);
    var replacement = substr.repeat(times);
    var newStr = times > 1 ? component.substring(0, pos) + replacement + component.substring(pos1 + 2, component.length) :
        component.substring(0, pos) + replacement + component.substring(pos1 + 1, component.length);
    return newStr;
}
//Step:2
//Spreads individual components
//For example: Transforms ch2oh2oh2oco2co2co2co2c to chhohhohhocoocoocoocooc
var spread = function (component) {
    var spread = component.split('').map((c, i) => {
        var result = '';
        if (isNaN(parseInt(c))) {
            var times = parseInt(component.charAt(i + 1));
            times = isNaN(times) ? 1 : times;
            result = c.repeat(times);
        }
        return result;
    }).join('');
    return spread;
}

//Step:3
//Finds the count of occurences and groups them together
//For example: Transforms chhohhohhocoocoocoocooc to c6h6o11
var group = function (spread) {
    var char = spread.split('').sort();
    var current = '', count = 1;
    for(let i=0;i<char.length;i++){
        if(char[i] === char[i+1]) count++;
        else {
            current=current+char[i]+count;
            count = 1;
        }
    }
    return current;
};




var simplified = extractComponents('(c(h2o)2(h2o)(co2)4c)');
console.log(simplified);
