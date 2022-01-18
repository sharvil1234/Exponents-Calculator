function expo() {
    var a = document.getElementById("base").value;
    var b = document.getElementById("expo").value;
    var c = document.getElementById("answer");
    d = Math.pow(a, b);
    c.innerHTML = d;
}