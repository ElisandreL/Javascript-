// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let last = fruits.pop(); //supprime le dernier élément
        let first = fruits.shift(); // "" le premier élément
        let bana = fruits.unshift('banana'); // ajout banana au début
        let kiwi = fruits.push('Kiwi'); // ajout kiwi à la fin
        console.log(fruits)
    })

})();
