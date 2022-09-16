var largestRectangleArea = function(heights) {
    var n=heights.length;
    var maxArea=0;
    var ps=new Array(n);
    var ns=new Array(n);
  ps= prevSmaller(heights);
   ns= nextSmaller(heights);
     function prevSmaller(heights)
   {
    //var m=heights.length;
     var stack=[];
     for(var i=0;i<n;i++)
     {  
        while(!(stack.length==0)&& heights[stack[stack.length-1]]>=heights[i])
        {
            stack.pop();
        }
        if(stack.length==0)
        {
            ps[i]=-1;
        }
        else
        {
            ps[i]=stack[stack.length-1];
        }
        stack.push(i);
     }
      return ps;
    };

    function nextSmaller(heights)
    {
    
      var stack1=[];
      for(var i=n-1;i>=0;i--)
      {
         while(!(stack1.length==0)&& heights[stack1[stack1.length-1]]>=heights[i])
         {
             stack1.pop();
         }
         if(stack1.length==0)
         {
             ns[i]=heights.length;;
         }
         else
         {
             ns[i]=stack1[stack1.length-1];
         }
         stack1.push(i);
      }
       return ns;
     };
     for(var i=0;i<n;i++)
     {
      var cur=(ns[i]-ps[i]-1)*heights[i];
      maxArea=Math.max(maxArea,cur);
     }
     return maxArea;

};

var heights=[3,1,2,4];
var r=largestRectangleArea(heights);
console.log(r);