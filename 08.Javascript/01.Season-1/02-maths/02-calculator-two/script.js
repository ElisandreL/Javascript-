
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

/*(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        // perform the operation
        let op1 = new Number(document.getElementById("op-one").value);
        let op2 = new Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition": return op1 + op2;
            case "substraction": return op1 - op2;
            case "multiplication": return op1 * op2;
            case "division": return op1 / op2;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (alert(performOperation($btn.id), false)),
        ),
    );
})();*/
(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        // perform the operation
        let op1 = new Number(document.getElementById("op-one").value);
        let op2 = new Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition": 
            alert(op1 + op2);
            break;
            case "substraction": 
            alert(op1 - op2);
            break;
            case "multiplication": 
            alert(op1 * op2);
            break;
            case "division": 
            alert(op1 / op2);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();


/*(() => {
    // to get the value of an input: document.getElementById("element-id").value


    const performOperation = operation => {

        // perform the operation
        let op_one = new Number(document.getElementById("op-one").value);
        let op_two = new Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition": return op_one + op_two;
            case "substraction": return op_one - op_two;
            case "multiplication": return op_one * op_two;
            case "division": return op_one / op_two;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (alert(performOperation($btn.id), false)),
        ),
    );
})();*/