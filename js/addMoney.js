document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();


    const addMoney=getInputFieldValue('input-add-money');
    const pinNumber=getInputFieldValue('input-pin-number');
    

    if(pinNumber===1234){
        const balance=getTextValue('balance-amount');
        const newBalance=addMoney+balance;

        document.getElementById('balance-amount').innerText=newBalance;
    }
    else{
        alert('Wrong pin number. Please try again.');
    }
})