
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {
    document.getElementById("run").addEventListener("click", () => {
    // your code here
       let color = document.getElementById("color").value;
        document.body.style.backgroundColor = color;
})
})();