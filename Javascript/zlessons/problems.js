// // You get an array of numbers, return the sum of all of the positives ones.

// // Example [1,-4,7,12] => 1 + 7 + 12 = 20

// // Note: if there is nothing to sum, the sum is default to 0.

// let array=[ 1,3,"5",false,16, 9 ,23, -4]

// function sumapositivos(numbers)
// i


function cambionombre(name) {
    var newName = "";
    for (var i = name.length - 1; i >= 0; i--) {
        newName += name[i];
    }
    return newName;
}
console.log(cambionombre('carlos'));