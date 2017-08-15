function sentencesManipulation(kalimat)
{
  var tampung = kalimat.split(' ');
  var hasil   = [];
  for (i=0; i<tampung.length; i++) {
    if (tampung[i].charAt(0)=='a' || tampung[i].charAt(0)=='i' || tampung[i].charAt(0)=='u' || tampung[i].charAt(0)=='e' || tampung[i].charAt(0)=='o' )
    {
      hasil.push(tampung[i]);
    }
    else
    {
      var awal = tampung[i].charAt(0);
      var tambah = 'nyo';
      var hapus = tampung[i].substr(1);
      hasil.push(hapus.concat(awal,tambah));
    }
    }
      console.log(hasil.join(" "));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');
