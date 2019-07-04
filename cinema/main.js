function tickets(peopleInLine){

    let a25 = 0;
    let a50 = 0;

    for(i=0; i<peopleInLine.length; i++) {
        if(peopleInLine[i] === 25) {
            a25 += 1;
        }
        if(peopleInLine[i] === 50) {
            a25 -= 1;
            a50 += 1;
        }
        if(peopleInLine[i] === 100) {
            if(a25 >= 3 && a50 === 0) {
                a25 -= 3;
            }
            else if (a25 >= 1 && a50 >= 1) {
                a25 -= 1;
                a50 -= 1;
            }
            else {
                return 'NO';
                console.log('NO');
            }
        }
        if(a25 < 0 || a50 < 0) {
            return 'NO';
            console.log('NO');
        }
    }
    return 'YES';
    console.log('YES');
}

tickets([25, 25, 50, 50]);
tickets([25, 100]);