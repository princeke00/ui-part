const arr1 = [1, 2, 3, 4, 5];
const map1 = arr1.map(x => x * x);

document.write(map1);


const arr2 = [1, 4, 9, 16, 25];
const map2 = arr2.map(function(arr2) {

    return Math.sqrt(arr2)
})

document.write(map2);