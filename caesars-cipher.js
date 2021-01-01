function toChar13(charCo)
{
  if(65 <= charCo && charCo <= 90)
  {
      return (90 - charCo >= 13) ? String.fromCharCode(charCo + 13)
      : String.fromCharCode(65 +  12 - (90 - charCo)) ; 
  }
  else { return String.fromCharCode(charCo); }
  
}
function rot13(str) {
  let strArrayzed = str.split("")
  strArrayzed.forEach( (item, index) => strArrayzed[index] = item.charCodeAt(0))
  strArrayzed.forEach( (code, index) => strArrayzed[index] = toChar13(code))

  console.log(strArrayzed.join(""));
  return strArrayzed.join("");
}
// 65-90
rot13("SERR PBQR PNZC");
