
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let va1 = new Number(document.getElementById("op-one").value);
        let va2 = new Number(document.getElementById("op-two").value);
        let sum = va1 + va2;
        alert(sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let va1 = new Number(document.getElementById("op-one").value);
        let va2 = new Number(document.getElementById("op-two").value);
        let sou = va1 - va2;
        alert(sou);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let va1 = new Number(document.getElementById("op-one").value);
        let va2 = new Number(document.getElementById("op-two").value);
        let mut = va1 * va2;
        alert(mut);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let va1 = new Number(document.getElementById("op-one").value);
        let va2 = new Number(document.getElementById("op-two").value);
        let div = va1 / va2;
        alert(div);
    });
})();
