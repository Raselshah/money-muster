// js start now

// calculation button developing
commonId("calculation-btn").addEventListener("click", function () {
  commonId("total-buy").innerText = calculateUserCost();
  commonId("total-money").innerText = totalBalance();
});

//   same id element convert to function
function commonId(para) {
  return document.getElementById(para);
}

// calculation user cost amount
function calculateUserCost() {
  const foodCost = commonId("food-cost");
  const rentCost = commonId("rent-cost");
  const clothesCost = commonId("clothes-cost");
  const totalCost =
    parseInt(foodCost.value) +
    parseInt(rentCost.value) +
    parseInt(clothesCost.value);

  return totalCost;
}

// remaining balance calculation after buying
function totalBalance() {
  const userMoney = commonId("user-money");
  const remainingBalance = parseInt(userMoney.value) - calculateUserCost();
  return remainingBalance;
}

// saving balance user total money button developing
commonId("saving-btn").addEventListener("click", function () {
  commonId("total-buy-save").innerText = saveMoney();
  commonId("total-buy-money").innerText = totalBalance() - saveMoney();
});

function saveMoney() {
  const saveAmount = commonId("saving-amount");
  const saveBalance =
    parseInt(totalBalance()) * (parseInt(saveAmount.value) / 100);
  return saveBalance;
}
