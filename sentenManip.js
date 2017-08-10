function stringManipulation(word) {
  //write your code here
  var vokal = ["a","i","u","e","o"] ;
  var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"] ;
  var string =''
  vokal.forEach(function(replace) {
    if (replace === word.toLowerCase().charAt(0)){
      string = word;
    }
  })
  konsonan.forEach(function(replace){
    if (replace === word.toLowerCase().charAt(0)) {
      string = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";
    }
  })
  return string;
}

function sentencesManipulation(sentence) {
var kalimat = sentence.split(" ");
var kandang = [];
for (var w = 0; w < kalimat.length; w++){
  kandang.push(stringManipulation(kalimat[w]))
}
console.log(kandang.join(" "));
}
sentencesManipulation('ibu pergi ke pasar bersama aku');
