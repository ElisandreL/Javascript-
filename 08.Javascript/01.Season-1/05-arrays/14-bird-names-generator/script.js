// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
       

       // Générer un nombre aléatoire pour aller chercher l'index
       var rand = [];
       function rand12() {
           return Math.round((Math.random())*12);
       };
       function rand11() {
        return Math.round((Math.random())*11);
    };

       function randomizer() {
           for(let i = 0; i < 1; i++) {
               rand.push(rand12());
           } return rand;
       }

       // Définir l'élément grâce à son index
       
       var partOne = birds[randomizer()];

       console.log(partOne.name + ' ' + partOne.fem)

       // Même chose pour la partie 2

       let adj = Array.from(adjectives);
       console.log(adj);

       let rand2 = [];
       function randomiTwo() {
        for(let i = 0; i < 1; i++) {
            rand2.push(rand11());
        } return rand2;
    }
       
       var parTwo = adj[randomiTwo()];
       
       console.log(parTwo);

       if (partOne.fem == true) {
        document.getElementById("target").innerHTML = ('La ' + partOne.name + ' ' + parTwo + 'e');
       } else {
        document.getElementById("target").innerHTML = ('Le ' + partOne.name + ' ' + parTwo);
       }

    })
})();
