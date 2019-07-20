function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var sumPenumpang = [];

    for(var i = 0; i < arrPenumpang.length; i++){
        var obj = {};
        var naikDari = 0;
        var tujuan = 0;
        for(var k = 0; k < rute.length; k++){
            if ( arrPenumpang[i][1] == rute[k]) {
                naikDari = k;
            } else if ( arrPenumpang[i][2] == rute[k]) {
                tujuan = k;
            }
            obj['penumpang'] = arrPenumpang[i][0];
            obj['naikDari'] = arrPenumpang[i][1];
            obj['tujuan'] = arrPenumpang[i][2];
            obj['bayar'] = (tujuan - naikDari) * 2000;
            console.log(obj.penumpang);
        }
        sumPenumpang.push(obj);
    }
    return sumPenumpang;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]