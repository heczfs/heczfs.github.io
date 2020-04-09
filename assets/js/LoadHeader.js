/* Get Header form /asstes/template/header.html */
var xhr = new XMLHttpRequest();
var resp;
xhr.open("GET", "/assets/template/header.html");
xhr.send();
/* Get response */
xhr.onreadystatechange = function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        resp = xhr.responseText;
    }
}
/* Write the response into DOM when the page is fully loaded */
window.onload = function() {
    var OriginHTML = document.body.innerHTML;
    document.body.innerHTML = resp + OriginHTML;
}