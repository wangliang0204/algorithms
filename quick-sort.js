var arr = [21, 1, 33, 2, 4243, 2, 1, 3112, 78];
function quickSort(arr){
    if(arr.length<=1){
        return arr;//如果数组只有一个数，就直接返回；
    }

    var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整
    var numValue = arr.splice(num,1);//找到中间数的值
    var left = [];
    var right = [];

    for(var i=0;i<arr.length;i++){
        if(arr[i]<numValue){
            left.push(arr[i]);//基准点的左边的数传到左边数组
        }
        else{
            right.push(arr[i]);//基准点的右边的数传到右边数组
        }
    }
    return quickSort(left).concat(numValue,quickSort(right));//递归不断重复比较
}
alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”
