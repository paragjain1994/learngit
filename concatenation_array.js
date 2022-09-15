var getConcatenation = function(nums) {
    var ans=[];
    var n=nums.length;
    for(var i=0;i<(2*n);i++)
    {
      ans[i]=nums[i%n];
    }

    return ans;
};

var sumofArrayElement = function(arr) {
 return arr.reduce((acc, e) => acc + e)
}

var nums=[1,4,6,];
var sum = sumofArrayElement(nums)
var ans=getConcatenation(nums);
console.log(ans);
console.log(sum);
