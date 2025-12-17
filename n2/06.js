const findSecondLargest = () => {
    let arr = [3, 1, 4, 2, 5];
    let len = arr.length;
    let b = 0;

    for(let i = 0; i < len; i++){
        if(arr[i] < arr[i + 1]){
            b = arr[i + 1];
        }
    }

    for(let i = 0; i < len; i++){
        if(arr[i] < arr[i + 1] && arr[i + 1] < b){
            b = arr[i + 1];
        }
    }
    return b;
}

console.log(findSecondLargest());