// step:1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step:2
    const depositAmount = document.getElementById('user-deposit');
    const newDepositAmountString = depositAmount.value; 
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step:3
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString); 

    // step:4
    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    depositTotalAmount.innerText = currentDepositAmount;

    // step:5
    const totalBalance = document.getElementById('total-balance');
    const currentTotalBalanceString = totalBalance.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    // step:6
    const bankTotalBalance = currentTotalBalance + newDepositAmount;
    totalBalance.innerText = bankTotalBalance; 
    // console.log(typeof currentDepositAmount);


    // step:7
    depositAmount.value = '';
})