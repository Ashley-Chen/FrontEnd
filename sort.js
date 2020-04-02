const array = [], n = 10;
for( let i = 0; i < n; ++i){
    const source = Math.floor(Math.random() * 100);
    array.push(source)
}
console.log('原数组', array)



// 冒泡排序
const bubbleSort = (arr = []) => {
    const length = arr.length;
    if(arr && length < 2){
        return arr
    }
    for(let j = length; j > 1; --j){
        for(let i = 0; i < j-1; ++i){
            if(arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr
}

// 快速排序
const quickSort = ( arr = [] ) => {
    const length = arr.length;
    if(length < 2){
        return arr
    }
    const flag = arr[0], left = [], right = [];
    for(let i = 1; i < length; ++i){
        if(arr[i] < flag){
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([flag], quickSort(right));
}

const result = quickSort(array)
console.log('结果', result)
