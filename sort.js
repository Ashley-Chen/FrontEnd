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

const result = bubbleSort(array)
console.log('结果', result)
