document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step:1
    const withdrawAmount = document.getElementById('user-withdraw');
    const withdrawAmountString = withdrawAmount.value; 
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    

    // step:2
     const withdrawTotalAmount = document.getElementById('withdraw-total');
     const previousWithdrawAmountString = withdrawTotalAmount.innerText;
     const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
     
     // step:3
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawAmount;

       // step:4
    const totalBalance = document.getElementById('total-balance');
    const currentTotalBalanceString = totalBalance.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    // step:4
    const bankNewTotalBalance = currentTotalBalance - newWithdrawAmount;
    totalBalance.innerText = bankNewTotalBalance;
    



     // step:6
    withdrawAmount.value = '';

})