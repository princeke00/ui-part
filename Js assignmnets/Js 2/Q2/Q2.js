const square = function(x) {
    return x * x;
};

const double = function(x) {
    return x * 2;
};


document.write(square(double(5)) + "</br>");
document.write(square(double(10)) + "</br>");
document.write(double(square(5)) + "</br>");
document.write(double(square(10)) + "</br>");