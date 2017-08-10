window.onload = function(){
    'use strict';


}; function myFunction() {
    var txt;
    if (confirm("Are you hungry?") == true) {
        txt = "Me too...";
    } else {
        txt = "Are you sure?";
    }
    document.getElementById("demo").innerHTML = txt;
}