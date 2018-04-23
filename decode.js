function decode() {
    var out = document.getElementById("output").value;
    var key = document.getElementById("keyout").value;
    var output = JSON.parse(out);
    for (var i = 0; i < output.length; i++) {
        var li = ((output[i][0] / 17) * 100 + (output[i][1] / 17) * 10 + output[i][2] / 17) - parseFloat(key);
        console.log(String.fromCharCode(li));
        document.getElementById('exitout').innerHTML += String.fromCharCode(li);
    }
    document.getElementById("output").value = '';
    //document.getElementById('exitin').innerHTML = '';
}
