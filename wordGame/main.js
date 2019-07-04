window.onload = function(){

let divWord = document.querySelector('.word');
let word = 'bonjour';
divWord.innerHTML = word;

let input = document.querySelector('.input');

let time1 = 0;
let time2 = 0;

function timing1() {
    time1 = Date.now()
}

function timing2() {
    time2 = Date.now()
}

function wordCompare(){
    time = (time2 - time1) / 1000;
    seconds = time.toFixed(0);
    console.log(seconds)
    if(val !== word){
        let kronos = document.querySelector('.kronos').innerHTML = 'You took ' + seconds + 's to write ' + val
        val = '';
        console.log('nope');
    }else{
        val = '';
        console.log('okay');
    }
     
}


input.addEventListener('change', wordCompare);
input.addEventListener('focus', timing1);
input.addEventListener('input', timing2);

}