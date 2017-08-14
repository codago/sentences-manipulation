function stringManipulation(word) {
  if (word.charAt(0)=='a' || word.charAt(0)=='i' || word.charAt(0)=='u' || word.charAt(0)=='e' || word.charAt(0)=='o' )
  {
    return word;
  }
  else if (word.charAt(0)!='a' || word.charAt(0)!='i' || word.charAt(0)!='u' || word.charAt(0)!='e' || word.charAt(0)!='o' ){
    var akhir  = "nyo";
    return word.slice(1, word.length) + word.charAt(0) + akhir;
  }
}

function sentencesManipulation(sentence){
  var kalimat = sentence.split(" ");
  var TMP = [];
  for(var i=0;i<kalimat.length;i++){
    TMP.push(stringManipulation(kalimat[i]))
  }
  return TMP.join(" ");
}
console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));
