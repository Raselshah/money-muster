document
  .getElementById("calculation-btn")
  .addEventListener("click", function () {
    calculate();
    document.getElementById("total-buy").innerText = calculate();
    document.getElementById("total-money").innerText = totalBalance();
  });

function calculate() {
  const foodCost = document.getElementById("food-cost");
  const rentCost = document.getElementById("rent-cost");
  const clothesCost = document.getElementById("clothes-cost");
  const totalCost =
    parseInt(foodCost.value) +
    parseInt(rentCost.value) +
    parseInt(clothesCost.value);

  return totalCost;
}

function totalBalance() {
  const userMoney = document.getElementById("user-money");
  const remainingBalance = parseInt(userMoney.value) - calculate();
  return remainingBalance;
}

document.getElementById("saving-btn").addEventListener("click", function () {
  saveMoney();
});
function saveMoney() {
  const saveAmount = document.getElementById("saving-amount");
  const saveBalance =
    parseInt(totalBalance()) * (parseInt(saveAmount.value) / 100);
  return saveBalance;
}
