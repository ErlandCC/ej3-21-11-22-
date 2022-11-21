function calcularx() {
    var pi = 3.14161592
    var a = 18;
    var b = 7 ;
    var c = a+b;
    var a1 = pi*c;
    var p = (a1*( 3-(Math.sqrt(((3*a)+b)*(a+(3*b))))/(a+b)))
    document.getElementById('result').innerHTML = ('EL perimetro  '+a+' y '+b+' se aproxima en '+p+"")
}
