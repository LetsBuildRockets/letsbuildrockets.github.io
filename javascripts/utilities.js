function voltageDivider() {
  var vin = parseFloat(document.getElementById("vin").value);
  var r1 = parseFloat(document.getElementById("r1").value);
  var r2 = parseFloat(document.getElementById("r2").value);
  var vout = vin * (r2 / (r1+r2));
  var iw = vin / (r1+r2);
  var p1 = r1*iw*iw;
  var p2 = r2*iw*iw;
  document.getElementById("vout").value=vout;
  document.getElementById("iw").value=iw*1000;
  document.getElementById("p1").value=p1*1000;
  document.getElementById("p2").value=p2*1000;
}

function isFloatChar(character) {
  voltageDivider();
  return (character >= 48 && character <= 57) || character == 46 || character == 13;
}