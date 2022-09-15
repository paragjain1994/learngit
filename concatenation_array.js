var getConcatenation = function(nums) {
    var ans=[];
    var n=nums.length;
    for(var i=0;i<(2*n);i++)
    {
      ans[i]=nums[i%n];
    }

    return ans;
};

var nums=[1,4,6,];
var ans=getConcatenation(nums);
console.log(ans);
