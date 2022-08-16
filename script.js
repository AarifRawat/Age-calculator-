function getAge() {
  var bDay = document.getElementById('bday-month').value;
  console.log(bDay);
  var realBdy = new Date(bDay);
  console.log(realBdy);
  var year = realBdy.getFullYear();
  console.log(year);
  var tDate = new Date();
  var tyear = tDate.getFullYear();
  var age = tyear - year;
  console.log(age);
  document.getElementById('result').innerHTML = ' you are '+age+' years  old';
}
