const coins = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01
}

function checkCashRegister(price, cash, cid) {
  const cidCopy = [...cid];
  const objCid = Object.fromEntries(cidCopy.reverse());
  var change = cash - price, payback = { status: "OPEN", change: []};
  var totalCID = cid.reduce( (acc, item) => acc + item[1], 0);
  if ( change === totalCID ) { return { status: "CLOSED", change: cid }; }
  var cointsCount = 0, totalCoinCash = 0;
  for ( var coin in coins ) {
    cointsCount = Math.floor(change / coins[coin]);
    if ( cointsCount > 0 ) {
        totalCoinCash = coins[coin] * cointsCount;
        if ( objCid[coin] - totalCoinCash > 0 ) {
          change = (change - totalCoinCash).toFixed(2),
          payback.change.push([coin, totalCoinCash]); }
        else {
          change = (change - objCid[coin]).toFixed(2),
          payback.change.push([coin, objCid[coin]]);
        }
    } 
  }
  if ( change > 0 ) { payback.status = "INSUFFICIENT_FUNDS"; payback.change = []; }
  console.log(payback, cid, change );
  return payback;
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
