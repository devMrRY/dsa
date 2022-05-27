/* canSum returns true/false if sum can be generated by
   adding numbers present in nums with repeated numbers also 
*/

function canSum(sum, nums){
    if(sum<=0) return
    if(nums.length <= 1) return (sum % nums[0]) === 0;
    for(let i=0;i<nums.length;i++){
        let res = canSum(sum-nums[i], nums)
        console.log(res);
        return res;
    }
    return false;
}

console.log(canSum(7, [5,3,4,7]))