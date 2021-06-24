
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
 
        // YOUR CODE HERE
        /*document.getElementById("run").addEventListener("click", () => {
            let day = document.getElementById('dob-day').value;
            let month = document.getElementById('dob-month').value;
            let year = document.getElementById('dob-year').value;
            
            
            function getAge(age) {
            let today = new Date();
            
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            } return age;
            }
            
            function getAge(date) {
                let date = new Date(year, month, day);
                let today = new Date();
                var thisYear = today.getFullYear();
                var minus = thisYear - date.getFullYear();
                var ageYear = new Date(thisYear, date.getMonth(), date.getDate());
                var age = (today >= ageYear);
            
                return age
                    ? minus
                    : minus - 1;
            }
            alert(age);

        })*/
        // 04-dates/03-age-by-select/script.js - 4.3: calculate the age



document.getElementById("run").addEventListener("click", () => {
    // your code here

let jour = document.getElementById("dob-day").value;
let mois = document.getElementById("dob-month").value;
let an = document.getElementById("dob-year").value;
let aujourdhui = new Date();

let anniversaire = new Date(an, mois, jour);

let x = aujourdhui - anniversaire;

let age = x / 31536000000;

alert("You have " + Math.round(age) + " years old.");
})
       
})();
//à revoir