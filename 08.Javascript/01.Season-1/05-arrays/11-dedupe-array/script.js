// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    // Avec ES6 :

    document.getElementById("run").addEventListener("click", () => {
        /*let fruDo = Array.from(new Set(fruits));
        console.log(fruDo)
    })*/

    // Avec Reduce() : 

        let fruDo = fruits.reduce(function (acc, curr) {
            if(acc.indexOf(curr) === -1) {
                acc.push(curr);
            } return acc;
        }, []);
        console.log(fruDo);
    })


})();
