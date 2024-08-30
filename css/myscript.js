//number

var item = document.getElementById("n1");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 1;
}

var item = document.getElementById("n2");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 2;
}

var item = document.getElementById("n3");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 3;
}

var item = document.getElementById("n4");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 4;
}

var item = document.getElementById("n5");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 5;
}

var item = document.getElementById("n6");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 6;
}

var item = document.getElementById("n7");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 7;
}

var item = document.getElementById("n8");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 8;
}

var item = document.getElementById("n9");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 9;
}

var item = document.getElementById("n0");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += 0;
}

var item = document.getElementById("n.");
item.onclick = function () {
    document.querySelector(".display p").innerHTML += ".";
}

//operator

var o1 = false;
var o2 = false;
var o3 = false;
var o4 = false;

var item = document.getElementById("o1");
item.onclick = function () {
    if (o1) {
        alert("you cannot use operators consecutively")
    } else {
        document.querySelector(".display p").innerHTML += "+";
        o1 = true;
    }
}

var item = document.getElementById("o2");
item.onclick = function () {
    if (o2) {
        alert("you cannot use operators consecutively")
    } else {
        document.querySelector(".display p").innerHTML += "-";
        o2 = true;
    }
}

var item = document.getElementById("o3");
item.onclick = function () {
    if (o3) {
        alert("you cannot use operators consecutively")
    } else {
        document.querySelector(".display p").innerHTML += "*";
        o3 = true;
    }
}

var item = document.getElementById("o4");
item.onclick = function () {
    if (o4) {
        alert("you cannot use operators consecutively")
    } else {
        document.querySelector(".display p").innerHTML += "/";
        o4 = true;
    }
}

//options

var item = document.getElementById("ac");
item.onclick = function () {
    document.querySelector(".display p").innerHTML = "";
    location.reload();
}

var bulb = false;
var col = document.querySelector(".display p");

var item = document.getElementById("bulb");
item.onclick = function () {
    if (bulb) {
        document.querySelector(".options p").innerHTML = '<img src="/images/bulb.png" alt="bulb"></img>';
        bulb = false;
        col.style.backgroundColor = '#555454';
        col.style.color = "#e7e7e7";
    }
    else {
        document.querySelector(".options p").innerHTML = '<img src="/images/idea.png" alt="bulb"></img>';
        bulb = true;
        col.style.backgroundColor = '#D3D3D3';
        col.style.color = "#2d2c2c";
    }
}

var item = document.getElementById("equal");
item.onclick = function () {
    var value = document.querySelector(".display p").innerHTML;
    var val = String(value)
    if (value.trim() !== "") {
        try {
            console.log(value)
            result = eval(val);
            document.querySelector(".display p").innerHTML = result;
        }
        catch (e) {
            console.log(e)
        }
    }
    else {
        console.log('no expression')
    }
}

