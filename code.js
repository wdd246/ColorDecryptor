function code() {
    var ins = new Array(); //array with char
    var napis = document.getElementById("input").value; //inserted text
    var key=100; //default key
    
    if (document.getElementById("keyin").value != '') { //inseted key
        if(parseFloat(document.getElementById("keyin").value)>850 || document.getElementById("keyin").value<100)key=100;
        else{key = document.getElementById("keyin").value;}
    }
    
    var block = document.getElementById("color"); //color boxes
    
    //color #rgb 2D
    var colors = new Array(napis.length); 
    for (var i = 0; i < napis.length; i++) {
        colors[i] = new Array(3);
    }

    //encrypt text
    for (var i = 0; i < napis.length; i++) {
        ins[i] = (napis.charCodeAt(i) + parseFloat(key)); //text into char + key
        //console.log(ins[i]);

        var div = document.createElement("div"); //createing color boxes with this settings
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = '#' + ins[i];
        div.style.flex = "1";
        div.style.flexDirection = "row";
        div.style.display = "inline-block";
        var ck = div.style.backgroundColor;
        block.appendChild(div);

        var kk = ''; //string of #rgb array without 'rgb('+')'
        var ki = 0; //color array index

        for (var j = 4; j < ck.length; j++) {
            if (ck[j] == ' ') {
                continue;
            }
            if (ck[j] == ',' || ck[j] == ')') {
                colors[i][ki] = parseInt(kk);
                kk = "";
                ki++;
                continue;
            }
            kk += ck[j];
        }
        kk = "";
        ki = 0;
    }

    document.getElementById('exitin').innerHTML = JSON.stringify(colors); //show array with code text
    document.getElementById("input").value = '';
    //document.getElementById('exitout').innerHTML ='');
}
