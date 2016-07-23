
function rot13(str) { // LBH QVQ VG!
  var result="";
  for (var i = 0; i < str.length; i++) {
    var tempcode=str[i].charCodeAt(0);
    if(tempcode>=65&&tempcode<=77)
    {
      result+=String.fromCharCode(tempcode+13);
    }else if(tempcode>77&&tempcode<=90)
    {
      result+=String.fromCharCode(tempcode-13);

    }else if(tempcode===32)
      {
        result+=" ";
      }
      else{
        result+=str[i];
      }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
