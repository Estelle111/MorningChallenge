

    function emailIsValid (email) {
        let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(String(email).toLowerCase());
    }

    /* console.log(emailIsValid('estellemol-@@gmail.com'))  */

    /* let userEmail = prompt('Enter your email');

    for(i=2; i<userEmail[15]; i++){
        console.log(userEmail);
    } */

    module.exports = emailIsValid;