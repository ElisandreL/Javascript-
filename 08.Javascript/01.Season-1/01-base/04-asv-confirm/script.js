
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
        let con = false
    while (!con) {
        let age = new Number(prompt('How old are you ?' ));
        let gend = new String(prompt('You define yourself as a male, female, or else ? '));
        let town = new String(prompt('Where do you live ? '));
        con = confirm("So you have " + age + " years old, you define yourself as a " + gend + " and you come from " + town + ". Is it correct ?" );
        if (con) {
            break;
        }
    }
})();
