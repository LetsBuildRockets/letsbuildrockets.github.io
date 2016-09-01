function voltageDivider() {
  if (document.getElementById("solvefor").value == "vout") {
    var vin = parseFloat(document.getElementById("vin").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var vout = vin * (r2 / (r1 + r2));
    document.getElementById("vout").value=vout.toFixed(3);
  } else if (document.getElementById("solvefor").value == "vin") {
    var vout = parseFloat(document.getElementById("vout").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var vin = vout / (r2 / (r1 + r2));
    document.getElementById("vin").value=vin.toFixed(3);
  } else if (document.getElementById("solvefor").value == "r1") {
    var vout = parseFloat(document.getElementById("vout").value);
    var vin = parseFloat(document.getElementById("vin").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var r1 = (r2 * (vin - vout))/vout;
    document.getElementById("r1").value=r1.toFixed(3);
  } else if (document.getElementById("solvefor").value == "r2") {
    var vout = parseFloat(document.getElementById("vout").value);
    var vin = parseFloat(document.getElementById("vin").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 =  - (vout * r1) / (vout - vin);
    document.getElementById("r2").value=r2.toFixed(3);
  }
 

  var iw = vin / (r1+r2);
  var p1 = r1*iw*iw;
  var p2 = r2*iw*iw;
  document.getElementById("iw").value=(iw*1000).toFixed(3);
  document.getElementById("p1").value=(p1*1000).toFixed(3);
  document.getElementById("p2").value=(p2*1000).toFixed(3);
}

function RCLowPassFilter() {
  if (document.getElementById("solvefor").value == "r1") {
    var c1 = parseFloat(document.getElementById("c1").value);
    var fcut = parseFloat(document.getElementById("fcut").value);   

    var r1 = 1/(2*Math.PI*c1*fcut);
    document.getElementById("r1").value=r1; 
  } else if (document.getElementById("solvefor").value == "c1") {
    var r1 = parseFloat(document.getElementById("r1").value);
    var fcut = parseFloat(document.getElementById("fcut").value); 

    var c1 = 1/(2*Math.PI*r1*fcut);
    document.getElementById("c1").value=c1; 
  } else if (document.getElementById("solvefor").value == "fcut"){
    var r1 = parseFloat(document.getElementById("r1").value);
    var c1 = parseFloat(document.getElementById("c1").value);
    
    var fcut = 1/(2*Math.PI*r1*c1);
    document.getElementById("fcut").value=fcut; 
  }

}

function solveforchange(value) {
  var inputs = document.getElementsByName("input");
  for (var i = 0; i < inputs.length; i++)
    inputs[i].removeAttribute("disabled")
  document.getElementById(value).setAttribute("disabled",true);
}

function isNumberKey(self, charCode) {
  if (charCode == 46) {
    if (self.value.indexOf('.') === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  }
  return true;
}