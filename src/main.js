function save() {
    var checkbox = document.getElementById("ch1");
    localStorage.setItem("ch1", checkbox.checked);

    var checkbox = document.getElementById("ch2");
    localStorage.setItem("ch2", checkbox.checked);

    var checkbox = document.getElementById("ch3");
    localStorage.setItem("ch3", checkbox.checked);

    var checkbox = document.getElementById("ch4");
    localStorage.setItem("ch4", checkbox.checked);

    var checkbox = document.getElementById("ch5");
    localStorage.setItem("ch5", checkbox.checked);

    var checkbox = document.getElementById("ch6");
    localStorage.setItem("ch6", checkbox.checked);





}

//for loading...
    var checked = JSON.parse(localStorage.getItem("ch1"));
    document.getElementById("ch1").checked = checked;

    var checked = JSON.parse(localStorage.getItem("ch2"));
    document.getElementById("ch2").checked = checked;

    var checked = JSON.parse(localStorage.getItem("ch3"));
    document.getElementById("ch3").checked = checked;

    var checked = JSON.parse(localStorage.getItem("ch4"));
    document.getElementById("ch4").checked = checked;

    var checked = JSON.parse(localStorage.getItem("ch5"));
    document.getElementById("ch5").checked = checked;

    var checked = JSON.parse(localStorage.getItem("ch6"));
    document.getElementById("ch6").checked = checked;