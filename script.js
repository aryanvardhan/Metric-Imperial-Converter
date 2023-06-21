
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function getDate () {
  const date = new Date();
  var dateElem = document.getElementById("getdate");
  var dateCont = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  dateElem.innerText = dateCont;
}
