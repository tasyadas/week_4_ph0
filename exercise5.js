function ubahHuruf(kata) {
    var abc = 'abcdefghijklmnopqrstuvwxyz';

    var ubah = '';
    for (var i = 0; i < kata.length; i++){
        for ( var j = 0; j < abc.length; j++){
            if ( kata[i] == abc[j]) {
                if (kata[i] == 'z') {
                    ubah += abc[0]
                } else {
                    ubah += abc[j + 1];
                }
            }
        }
    }
    return ubah;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
