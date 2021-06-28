// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {
         const chat = new Cat('Skitty', '9 years');
         const chatBis = new Cat('Pixel', '6 years' );
         console.log(chat, chatBis)
    })
})();
