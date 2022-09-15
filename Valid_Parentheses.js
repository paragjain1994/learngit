var isValid = (s) => {
    var stack = [];
    
    for (let i = 0; i < s.length; i++) {
    var top = stack[stack.length - 1];    //here length of stack array is dynamically changed according to need
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
        stack.pop();
      } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
    if(stack.length === 0)
    return true;
    else return false;
  };
  var result=(isValid('[{}]'));
  console.log(result);



