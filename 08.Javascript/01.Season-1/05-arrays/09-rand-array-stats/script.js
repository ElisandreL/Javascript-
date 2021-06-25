// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        /*var newAr = [];
        function rand10() {
            return Math.round(Math.random() * 100);
        }
        function arPush() {
        for (let i = 0; i < 10; i++) {
            newAr.push(rand10());
        } return newAr;
     }
        console.log(arPush())*/
        var newAr = [];
        
        // Random function

        function arPush() {
        for (let i = 0; i < 10; i++) {
            newAr.push(Math.floor(Math.random() * 100));
        } return newAr;
     }
        console.log(arPush());

        // Minimum

        function min(newAr) {
            const min = Math.min.apply(null, newAr);
            return min;
            }
            console.log(min(newAr));

        // Maximum
        
        function max(newAr) {
            const max = Math.max.apply(null, newAr);
            return max;
            }
            console.log(max(newAr));
        
        // Sum

        function sum(newAr) {
            return newAr.reduce((a, b) => a + b, 0);
        }
        console.log(sum(newAr));

        // Average

        function average(newAr) {
            return newAr.reduce((a, b) => a + b, 0) / newAr.length;
        }
        console.log(average(newAr));
    })
})();
