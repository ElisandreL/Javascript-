
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    document.getElementById("run").addEventListener("click", () => {
    // your code here
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    document.body.style.backgroundColor = getRandomColor();

})
})();
