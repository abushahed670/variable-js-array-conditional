var isGraduated =true;
// var salary = 35000;
var salary = 50000;
var cars = 0;
// for single conditions
 if (isGraduated == true){
    console.log(" this is time to merry")
 }
  else{
    console.log(" muri khaa")
  }
//   multiple conditions... all are true
if (isGraduated == true && salary >= 50000){
    console.log(" this is time to merry")
 }
  else{
    console.log(" muri khaa")
  }
// all are not true then else statement start
if (isGraduated == true && salary > 50000 && cars >= 1){
    console.log(" this is time to merry")
 }
  else{
    console.log(" muri khaa")
  }

//   minimum one condition is true then statements is true
if (isGraduated == true || salary > 50000 || cars >= 1 ){
    console.log(" this is time to merry")
 }
  else{
    console.log(" muri khaa toi")
  }
