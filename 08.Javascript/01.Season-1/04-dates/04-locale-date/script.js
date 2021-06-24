
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    /*let date = new Date
    document.getElementById("target").innerHTML = date;*/
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let date = new Date;
    let day = days[date.getDay()];
    let dayT = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let dateTotal = (day + ' ' + dayT + ' ' + month + ' ' + year + ', ' + hour + 'h' + min);
    document.getElementById("target").innerHTML = dateTotal
})();
