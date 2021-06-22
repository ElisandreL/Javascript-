
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    /*var today = new Date()
    var curHr = today.getHours()

    if (curHr < 17.30) {
    document.getElementById("target").innerHTML = 'Hello';
    } else {
    document.getElementById("target").innerHTML = 'Good evening.';
    }*/
    function getText() {
        let heure = new Date().getHours();
        let minut = new Date().getMinutes();
        if((heure < 17) && (minut < 30)) {
            return "Hello";
        } else {
            return "Good evening.";
        }
    }
    document.getElementById("target").innerHTML = getText()
})();

