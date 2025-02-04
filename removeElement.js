
var removeElement = function(nums, val) {
    // for(let  i = 0; i<nums.length;i++){
    //     if(nums[i]==val){
    //         nums.splice(i,1)
    //         i=i+1
    //     }
    

    // }
    i = 0
    while(i < nums.length){
        if(nums[i]==val){
                    nums.splice(i,1)
                    i=i-1
                }
                i=i+1
                console.log(i)
                console.log('nums[i]', nums[i])
               console.log('nums', nums)
    }
   

    return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2],2))