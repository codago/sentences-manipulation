function stringManipulation(word) {
  var prefik = "nyo";
  var tempWord = "";
  var vocal = "aiueo";

    if(!vocal.includes(word[0].toLowerCase())){
        tempWord = word.slice(1,word.length)+word[0]+prefik;
        return tempWord;
    }
    return word;
  
}

function sentencesManipulation(sentence) {
  //write your code here
  var sentencesArr = sentence.split(" ");
  var tempArr = [];
  
  for(var i=0;i<sentencesArr.length;i++){
    tempArr.push(stringManipulation(sentencesArr[i]))
  }
  return tempArr.join(" ");
}
console.log(sentencesManipulation('ibu pergi ke pasar bersama aku'));
//'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'