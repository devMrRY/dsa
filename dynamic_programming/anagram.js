// silent and listen

let str1 = 'silent';
let str2 = 'listwn';

function checkAnagram(){
    let obj1= {};
    let obj2= {};
    if(str1.length !== str2.length) return false;
    str1.split('').forEach(s => obj1[s] ? obj1[s] = ++obj1[s] : obj1[s] = 1)
    str2.split('').forEach(s => obj2[s] ? obj2[s] = ++obj2[s] : obj2[s] = 1)
    for(let i in obj1){
        if(obj1[i] !== obj2[i]) return false;
    }
    return true;
}

console.log(checkAnagram());