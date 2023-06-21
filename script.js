


function getDate () {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  var dateElem = document.getElementById("getdate");
  var dateCont = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  dateElem.innerText = dateCont;
}



function convertTemp () {
  const celtemp = document.getElementById("cel-temp");
  const fartemp = document.getElementById("far-temp");
  var result;

  if (celtemp.value == "" && fartemp.value == ""){
    alert("Error! enter a value in one of the two fields!")
  } else if (celtemp.value == ""){
    result = (parseInt(fartemp.value) - 32) * (5/9);
    celtemp.value = result;
  } else if (fartemp.value == "") {
    result = (parseInt(celtemp.value) * (9/5)) + 32;
    fartemp.value = result;
  } else {
    alert("leave one of the conversion values blank!");
    celtemp.value = "";
    fartemp.value = "";
  }
}


function convertWeight () {
  const kgWeight = document.getElementById("KG-weight");
  const poundWeight = document.getElementById("pound-weight");
  var result;

  if (kgWeight.value == "" && poundWeight.value == ""){
    alert("Error! enter a value in one of the two fields!")
  } else if (kgWeight.value == ""){
    result = parseInt(poundWeight.value) / 2.205 ;
    kgWeight.value = result;
  } else if (poundWeight.value == "") {
    result = parseInt(kgWeight.value) * 2.205;
    poundWeight.value = result;
  } else {
    alert("leave one of the conversion values blank!");
    kgWeight.value = "";
    poundWeight.value = "";
  }
}

function convertDist () {
  const kmDist = document.getElementById("km-dist");
  const mileDist = document.getElementById("mile-dist");
  var result;

  if (kmDist.value == "" && mileDist.value == ""){
    alert("Error! enter a value in one of the two fields!")
  } else if (kmDist.value == ""){
    result = parseInt(mileDist.value) * 1.609 ;
    kmDist.value = result;
  } else if (mileDist.value == "") {
    result = parseInt(kmDist.value) / 1.609;
    mileDist.value = result;
  } else {
    alert("leave one of the conversion values blank!");
    kmDist.value = "";
    mileDist.value = "";
  }
}
