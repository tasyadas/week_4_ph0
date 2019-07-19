function cariModus(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    
    var tampung = [];
    for ( var i = 0; i<arr.length; i++){
        if ( arr[i] !== arr[i+1]) {
            tampung.push(arr[i]);
        }
    }

    var score = [];
    for ( var i = 0; i<tampung.length; i++){
    var count = [];
        for ( var j = 0; j<arr.length; j++){
            if ( arr[j] == arr[i]) {
                count.push(arr[j]);
            }
        }
        if ( score.length == 0 || score.length < count.length) {
            score = count;
            count = [];
        } else {
            count = [];
        }      
    }

    if ( score.length == arr.length || score.length == 1) {
        return -1;
    } else {
        return score[0];
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1