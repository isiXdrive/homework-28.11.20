function removeElements(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] != 'a' && str[i] != 'o' && str[i] != 'u' && str[i] != 'e' && str[i] != 'i') {
        result += str[i];
      }
  
    }
    return result;
  }
  
  let newStr = removeElements('ismayil');
  
  console.log(newStr)

  