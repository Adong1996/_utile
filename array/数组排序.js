// 快排 [left] + min + [right]
function quickArr(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [],
        right = [];
    var pIndex = Math.floor(arr.length / 2);
    var p = arr.splice(pIndex, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 递归
    return quickArr(left).concat([p], quickArr(right));
}

// 冒泡
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}