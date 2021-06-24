
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => { 
    /*let year = document.getElementById("year").value;
    function friday(year) {
        let counter = 0;
        for (i = 1; i <= 12; i++) {
            let d = new Date(i + "/13/" + year); 
            if (d.getDay() == 5) {
                counter++;
            }
        }
        return counter;
    }
    alert(friday(year))*/
    let year = document.getElementById("year").value;
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let monThi = [];
    function friday(year) {
        let date = new Date(year);
        let month = months[date.getMonth(year)];
        for (i = 1; i <= 12; i++) {
            let d = new Date(i + "/13/" + year); 
            if (d.getDay() == 5) {
                monThi.push();
            }
        }
        return monThi;
    }
    alert(friday(year));
    })
})();
