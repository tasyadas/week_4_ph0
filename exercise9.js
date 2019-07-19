function checkAB(num) {
    var cek = false
    for ( var i = 0; i < num.length; i++){
        for ( var j = 0; j < num.length; j++){
            if (num[i] == 'a' || num[i] == 'b') {
                if (num[j] == 'b' || num[j] == 'a') {
                    if ( ((j-1) - i) === 3) {
                        cek = true;
                    }
                }
            }
        }
    }
    return cek;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false