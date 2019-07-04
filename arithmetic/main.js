var findMissing = function (list) {  
  var alpha = (list[list.length - 1] - list[0]) / list.length // alpha = operation to find the arithmetic reason
  for(i=0; i<list.length - 1; i++){ // list.length of [1, 2, 3] will be 3 (length) for indexes from 0 -> 2
                                    // list.length - 1 of [1, 2, 3] => will be 2 (length) for indexes from 0 -> 2
    if(list[i+1] - list[i] !== alpha){ // if (next element - previous element)'s result is different of alpha
      return list[i] + alpha ;         // then  (previous element of that result) + alpha
                                       // will give us the missed element of the arithmetic list
    }
  } 
}