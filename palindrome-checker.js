function palindrome(str) {
  let strCleaned = str.replace(/[^a-z0-1]/ig, "").toLowerCase();
  console.log(strCleaned);

  let reversedStrCleaned = strCleaned.split("").reverse().join("");
  return strCleaned === reversedStrCleaned;
}



//console.log(palindrome("14*eyE"));
console.log(palindrome("1 eye for of 1 eye."));
