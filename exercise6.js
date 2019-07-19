function digitPerkalianMinimum(angka) {
    var faktorial = [];
    for ( var i = 1; i <= angka; i++){
        for ( var j = 1; j <= angka; j++){
            if ( (i * j) === angka) {
                var digit = String(i) + String(j);
                faktorial.push(digit.length);
            }
        }
    }    

    for (var i = 0; i < faktorial.length; i++) {
        for (var j = 0; j < faktorial.length; j++) {
            if (faktorial[j] > faktorial[j + 1]) {
                var tmp = faktorial[j];
                faktorial[j] = faktorial[j + 1];
                faktorial[j + 1] = tmp;
            }
        }
    }
    
    return faktorial[0];
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2