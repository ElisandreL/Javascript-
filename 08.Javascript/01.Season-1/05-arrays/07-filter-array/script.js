// 05-arrays/07-filter-array/script.js - 5.7: filter an array

(() => {

    const people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let newAr = [];
        let defAge = people.forEach(function(people) {
            if (people.age >= 18) {
                //console.log(people.firstname + ' ' + people.lastname);
                newAr.push(people.firstname+ ' ' + people.lastname);
            }
        });
        
        console.log(newAr);
    })
    /*document.getElementById("run").addEventListener("click", () => {
        
        let defAge = people.map(function(people) {
            if (people.age >= 18) {
                //console.log(people.firstname + ' ' + people.lastname);
               return people; 
            } else {
                people.splice(0, defAge);
            }
        });
        console.log(defAge);
    })*/

})();
