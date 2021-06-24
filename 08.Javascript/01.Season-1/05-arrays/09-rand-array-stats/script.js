// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let newAr = [];
        newAr.length = 10;
        for (let i = 0; i < newAr.length; i++) {
            newAr.push(Math.floor(Math.random)*10);
        } 
        console.log(newAr)
    })
})();
