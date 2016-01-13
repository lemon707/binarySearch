var binarySearch = function(array, targetValue) {

    var length = array.length,
        min = 0,
        max = array.length - 1

    while(min <= max) {
        mid = Math.floor((max + min) / 2);

        if(array[mid] === targetValue) {
            return mid;
        } else if(array[mid] < targetValue) {
            min += 1;
        } else {
            max -= 1;
        }
    }

    return -1;

}

module.exports = binarySearch;