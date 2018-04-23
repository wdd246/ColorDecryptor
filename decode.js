function decode() {
    var out = document.getElementById("output").value; //insert text
    var key = 100; //default key

    if (document.getElementById("keyout").value != '') {//inserted key
        if(parseFloat(document.getElementById("keyout").value)>850 || document.getElementById("keyout").value<100)key=100;
        else{key = document.getElementById("keyout").value;} 
    }
    
    var output = JSON.parse(out); //string of array into array
    
    for (var i = 0; i < output.length; i++) {
        var li = ((output[i][0] / 17) * 100 + (output[i][1] / 17) * 10 + output[i][2] / 17) - parseFloat(key); //decoding array - key
        document.getElementById('exitout').innerHTML += String.fromCharCode(li); //show string od output
    }
    document.getElementById("output").value = '';

}
