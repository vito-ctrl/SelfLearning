const findMissingNumber = () => {
    let arr = [1, 2,3, 4, 5, 8,9];
    for(let i = 1; i < arr.length; i++){
        if(arr[0] + arr[i] != arr[i + 1]) return arr[i] + 1;
    }
}

console.log(findMissingNumber());
