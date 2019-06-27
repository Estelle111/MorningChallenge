window.onload = function(){
    let btn = document.querySelector('.btn')
    let user = prompt('Entre un nombre entre 3 et 20 :');
    let nbr = parseInt(user);
    let integer = 0;

    // console.log(typeof nbr)

    function handleClick(){
        if(nbr < 3 || nbr > 20) {
            prompt('Erreur ! Entre un nombre entre 3 et 20 :')
        }else {
            integer = Math.round(nbr / 3);
            console.log(integer)
            switch (integer) {
                case integer = 1:
                    document.body.innerHTML = 'un';
                    break;
                case integer = 2:
                    document.body.innerHTML = 'deux';
                    break;
                case integer = 3:
                    document.body.innerHTML = 'trois';
                    break;
                case integer = 4:
                    document.body.innerHTML = 'quatre';
                    break;
                case integer = 5:
                    document.body.innerHTML = 'cinq';
                    break;
                case integer = 6:
                    document.body.innerHTML = 'six';
                    break;
                case integer = 7:
                    document.body.innerHTML = 'sept';
                break;
                default:
                    prompt('Erreur ! Entre un nombre entre 3 et 20 :');
            }
        }
    }

    btn.addEventListener('click', handleClick)
}
