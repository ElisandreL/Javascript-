
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        /*let num = new Number(Math.floor(Math.random() * 21));
        let numCar = num * num;
        alert('Here is your number : ' + num + '. And his square : ' + numCar);

        // your code here
        let n = 21
        let x = [];
        function range1(n) {
            var i = 1;
            while (x.push(i++) <= n) {};
            return x;
        }
        alert(range1(n));

        let y = [];
        function second() {
            y.push(Math.pow(x));
            return y;
        }*/
        function square(){
            let n = 21 ;
            let msg = "";
            let result = "0";
    
            for(let x = 1; x<=n; x++)
            {
                result = x * x;
                msg = msg + " " + x + " * " + x + " = " + result + "\n";
            }
    
            alert (msg);
        }
        square();
    });
})();
