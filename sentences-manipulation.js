function stringManipulation(word) {
  //write your code here
  var vokal = ["a", "i", "u", "e", "o" ];
  var konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
                  "n", "p", "q", "r", "s", "t", "v", "w", "x" ,"y", "z"];

  var string =''

  vokal.forEach(function(replace){
      if (replace === word.charAt(0)){
              string = word;
         }
       });

  konsonan.forEach(function(replace){
          if (replace === word.charAt(0)) {
              string = word.slice(1) + word.charAt(0) + "nyo";
            }
          })

  return string;
  }

  function sentencesmanipulation(sentences){
    var array = sentences.split(" ")
    var hasil= []
    for (var i = 0; i < array.length; i++) {
      hasil.push(stringManipulation(array[i]))
    }
    console.log(hasil.join(" "))
  }



sentencesmanipulation(' ibu pergi ke pasar bersama aku');
