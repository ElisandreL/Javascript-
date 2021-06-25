// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let moins = fruits.delete("apple");
        let moiMoins = fruits.delete("cherry");
        let plus = fruits.add("banana").add("kiwi");
        //let pluPlus = fruits;
        console.log(fruits);
    })
})();
