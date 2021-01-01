function bottom(digit)
{
    digit = parseInt(digit);
    return 0 < digit && digit <= 3;
}
function middle(digit){
    return 5 <= digit && digit <= 8;
}
function digitToRomanMil(digit)
{
    return bottom(digit) ?  "M".repeat(digit) : 
                middle(digit) ? "v" + "".padEnd(digit - 5, "M"):
                ( digit === "4") ? "Mm" : "Mx"; 
}
function digitToRomanCen(digit)
{
    return bottom(digit) ?  "C".repeat(digit) : 
                middle(digit) ? "D" + "".padEnd(digit - 5, "C"):
                ( digit === "4") ? "CD" : "CM"; 
}
function digitToRomanDec(digit)
{
    return bottom(digit) ?  "X".repeat(digit) : 
                middle(digit) ? "L" + "".padEnd(digit - 5, "X"):
                ( digit === "4") ? "XL" : "XC"; 
}
function digitToRomanUni(digit)
{
    return bottom(digit) ?  "I".repeat(digit) : 
                middle(digit) ? "V" + "".padEnd(digit - 5, "I"):
                ( digit === "4") ? "IV" : "IX"; 
}

function romanize(digit, len)
{
    if (digit == 0) { return ""; }
    else if (len === 4) { return digitToRomanMil(digit); }
    else if (len === 3) { return digitToRomanCen(digit); }
    else if (len === 2) { return digitToRomanDec(digit); }        
    else { return digitToRomanUni(digit); }

    //console.log(digit, len);
}

function convertToRoman(num) {
 let n = num.toString().split(""), nlen = n.length, romanizedNum = []
 n.forEach( (digit, index) => romanizedNum.push(romanize(digit, nlen - index)))
 console.log(romanizedNum.join(""))

 return romanizedNum.join("");
}

convertToRoman(68);
