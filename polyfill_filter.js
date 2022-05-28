Array.prototype.myfilter = function(func){
    let arr = this;
    let result = [];
    arr.forEach((item, i) => {
        if(func(item, i)){
            result.push(item);
        }
    })
    return result;
}

console.log([1,5,24,8,3].myfilter((item) => item % 2 === 0))