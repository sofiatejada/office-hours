function capArray(arr) {
    let newArr = [];
    arr.forEach((item) => {
        newArr.push(item.toUpperCase());
    });
    return newArr;
}

var capArray = (arr) => {
    var newArr = [];
    arr.forEach((item) => {
        newArr.push(item.toUpperCase());
    });
    return newArr;
};

function capArray(arr) {
    return arr.toString().toUpperCase().split(',');
}

var capArray = (arr) => {
    return arr.toString().toUpperCase().split(',');
};
