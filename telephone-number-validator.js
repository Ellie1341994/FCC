function telephoneCheck(str) {
  let strL = str.length, 
  re = new RegExp(/(^1? ?(\(\d{3}\) ?|\d{3}[- ])(\d{3})[ -](\d{4})$)|^\d{10}$/);
  //console.log(re);
  if ( strL > 16 || strL < 10) { return false; }

  //console.log(re.test(str));
  return re.test(str);
}

telephoneCheck("(555)555-5555");
