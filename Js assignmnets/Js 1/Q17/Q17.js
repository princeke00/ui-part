function rotate_elements_left(array) {
    return [array[1], array[2], array[0], array[3], array[4]];
}

document.write("After Shifting :" + rotate_elements_left([3, 4, 5, 3, 1]) + "</br>");
document.write("After Shifting :" + rotate_elements_left([0, -1, 2, 2, 1]) + "</br>");
document.write("After Shifting :" + rotate_elements_left([7, 6, 5, 3, 4]) + "</br>");