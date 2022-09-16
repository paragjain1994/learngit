var subtractProductAndSum = function(n) {

    var product=1,sum=0,temp=0;
    while (n > 0)
           {
               temp = n % 10;              //for remainder
               product = product * temp;
               sum=sum+temp;

               n = parseInt(n/ 10);           //otherwise x will store decimal value
           }
           return product-sum;
    
};

var n=234;
console.log(subtractProductAndSum(n));
