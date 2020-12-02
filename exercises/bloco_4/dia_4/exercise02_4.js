function findLongestName(array) {
    let longestName = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longestName.length) {
            longestName = array[i]
        }
    }
    return longestName;
}

let array = ["José" , "Lucas" , "Nádia" , "Fernanda" , "Cairo" , "Joana"];
console.log(findLongestName(array));

