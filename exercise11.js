function shoppingTime(memberId, money) {
    var obj = {};
    var itemList = [];
    var purchase = money;
    
    if (memberId) {
        if ( purchase >= 50000) {
            if ( purchase >= 1500000) {
                itemList.push('Sepatu Stacattu');
                purchase -= 1500000;
            } 
            if (purchase >= 500000) {
                itemList.push('Baju Zoro');
                purchase -= 500000;
            }
            if (purchase >= 250000) {
                itemList.push('Baju H&N');
                purchase -= 250000;
            }
            if (purchase >= 175000) {
                itemList.push('Sweater Uniklooh');
                purchase -= 175000;                    
            }
            if (purchase >= 50000) {
                itemList.push('Casing Handphone');
                purchase -= 50000;                    
            }
        }
        if (itemList.length !== 0) {
            obj['memberId'] = memberId;
            obj['money'] = money;
            obj['listPurchased'] = itemList;
            obj['changeMoney'] = purchase;
            return obj;            
        } else {
            return "Mohon maaf, uang tidak cukup";            
        }
    } else {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja