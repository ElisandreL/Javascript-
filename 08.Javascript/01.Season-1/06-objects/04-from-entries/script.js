// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        /*function splicer(array, element, index) {
            array.splice(index * 2, 0, element);
            return array;
        }
        
        function weave(keys, values) {
            return keys.reduce(splicer, values.slice());
        }
        
              
        let outcome = weave(keys, values);

        const neOb = [];

        neOb.push(outcome);

        var pairs = [];

        function splitPairs(neOb) {
            
            for (var i=0 ; i<neOb.length ; i+=2) {
                if (neOb[i+1] !== undefined) {
                    pairs.push ([neOb[i], neOb[i+1]]);
                } else {
                    pairs.push ([neOb[i]]);
                }
            }
            return pairs;
        };*/
        
        let nePair = [];

        function accu() {
            for(let i = 0; i < keys.length && values.length; i++) {
                nePair.push ([keys[i], values[i]])
            } return nePair;
        }
        console.log(accu());


        let obj = Object.fromEntries(accu());
        console.log(obj);
        
    })
})();
