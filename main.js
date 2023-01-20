function average() {
    var sum = 0;
    for (var i = 0; i < arguments[i]; i++) sum += arguments[i];
    return sum == 0 ? sum : sum / arguments.length;
}
alert(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));