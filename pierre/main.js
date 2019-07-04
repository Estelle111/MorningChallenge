window.onload = function() {

    let n = [1, 1, 5, 3, 9, 9, 6];

    function magic() {
        for(i=0; i<n.length; n++) {
            for(j=0; j<n.length; n++) {
                if(i !== j && n[i] === n[j]) {
                    n[i] = n[i] + 1
                    n.splice(j,1)
                    console.log(n)
                }
            }
        }
    }
    magic()
    console.log(n);


}

