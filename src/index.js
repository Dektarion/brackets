module.exports = function check(str, bracketsConfig) {
  let openArr = [];
  let closeDicr = {};
  let cloneBrackets = [];

  bracketsConfig.forEach((element) => {
    openArr.push(element[0]);
    closeDicr[element[1]] = element[0];
    if (element[0] === element[1]) {
      cloneBrackets.push(element[0])
    }
  })
  
  let stack = [];
  for (let i = 0; i < str.length; i++){
    let currentChar = str[i];
    let topElement = stack[stack.length - 1];
    
    if (cloneBrackets.includes(currentChar) && stack.includes(currentChar)) {
      if (currentChar === topElement) {
        stack.pop(currentChar);
        } else {
          return false;
        }
      } else if (openArr.includes(currentChar)){
          stack.push(currentChar);
      } else {
          if (stack.length === 0){
          return false;
          }
    
          if (closeDicr[currentChar] === topElement){
            stack.pop(currentChar);
          } else {
            return false;
          }
      }
  }
  return stack.length === 0;
}
