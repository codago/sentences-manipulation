function stringManipulation(word) {

var includer = 'nyo';
var vocal =  'aiueo';
var placeWord = " ";

if(!vocal.includes(word[0].toLowerCase())){
  placeWord = word.slice(1,word.length)+word[0]+includer;
return placeWord;


}
return word;
}

function sentenceManipulation(sentence) {

var  kalimatPjg = sentence.split(" ");
var placeSent = [];

for(var x=0; x<kalimatPjg.length; x++){
  placeSent.push(stringManipulation(kalimatPjg[x]))
}
return placeSent.join(" ");
}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'));
