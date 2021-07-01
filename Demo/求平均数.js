function getAverage(){
    [].sort.call(arguments, function (a, b) {
        return a-b;
    });
    [].shift.call(arguments);
    [].pop.call(arguments);
    return (eval([].join.call(arguments,"+"))/arguments.length).toFixed(2);
}

console.log(getAverage(2, 4, 1, 3, 4, 6));;