//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    };

    document.getElementById("run").addEventListener("click", () => {

        //firstname = 'Elisandre';
        //lastname = 'Laenens';
        //console.log(this.lastname)

        //let perso = new Person('Elisandre', 'Laenens');
        
        //console.log(perso.firstname)

        let perso = new Person(firstname = 'Elisandre', lastname = 'Laenens');
        

        function sayHello(Person) {
            return 'Hello ' + this.firstname + ' ' + this.lastname;
        }

        

        console.log(sayHello(Person))
    })
})();
