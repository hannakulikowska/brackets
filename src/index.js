
module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  
  for (let pair of bracketsConfig) {
    let brackets = pair.join("");
    while (newStr.includes(brackets)) {
      newStr = newStr.replace(brackets, "");
      console.log(newStr);
    }
  }

  if (newStr.length === str.length) {
    return false;
  }
  if (newStr === "") {
    return true;
  }

  return check(newStr, bracketsConfig);
}