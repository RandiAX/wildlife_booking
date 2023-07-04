function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://dwc.lankagate.gov.lk/DWCAjaxServlet?method=getBungalow&selectedPark=2&_=1686586876821", false);
  // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.send();
}