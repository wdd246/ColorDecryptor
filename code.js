function code() {
    var ins = new Array();
    var napis = document.getElementById("input").value;
    var key = document.getElementById("keyin").value;
    var block = document.getElementById("color");
    var colors = new Array(napis.length);
    for (var i = 0; i < napis.length; i++) {
        colors[i] = new Array(3);
    }

    for (var i = 0; i < napis.length; i++) {
        ins[i] = (napis.charCodeAt(i) + parseFloat(key));
        console.log(ins[i]);

        var div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = '#' + ins[i];
        div.style.flex = "1";
        div.style.flexDirection = "row";
        div.style.display = "inline-block";
        //div.className ="col-sm-12 col-md-4 col-lg-2 col-xl-2";
        var ck = div.style.backgroundColor;
        block.appendChild(div);

        var kk = '';
        var ki = 0;

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

    document.getElementById('exitin').innerHTML = JSON.stringify(colors);
    document.getElementById("input").value = '';
    //document.getElementById('exitout').innerHTML ='');
}
