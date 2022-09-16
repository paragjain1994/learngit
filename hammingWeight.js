var hammingWeight = function(n) {
    var count=0;
        for(var i=0;i<32;i++)
        {   var q=((n>>i)&1);
            if(q==1)
                count++;
        }
        
       return count;
    
};
var r=hammingWeight(7);
console.log(r);