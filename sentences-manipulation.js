function stringManipulation(word) {
  //write your code here
  var vokal = ["a","i","u","e","o"];
  var konsonan = ["b","c","d","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
  var tempat ='';

  vokal.forEach(function(checkvokal) {
    if (checkvokal === word.toLowerCase().charAt(0)) {
      tempat = word;
    }
  })
  konsonan.forEach(function(checkvokal){
    if (checkvokal === word.toLowerCase().charAt(0)) {
      tempat = word.slice(1) + word.toLowerCase().charAt(0) + "nyo";
    }
  })
return tempat;
}
function sentencesManipulation(sentence) {
  //write your code here
  var kalimatBaru = sentence.split(" ");
  var hasil = [];
  for (var z = 0; z < kalimatBaru.length; z++){
    hasil.push(stringManipulation(kalimatBaru[z]))
  }
console.log(hasil.join(" "));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');
