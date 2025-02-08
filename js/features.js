
function donateMyAccountBalance(id){
    const balance = document.getElementById(id).innerText ;
   const balanceNumber = parseFloat(balance) ;
    return balanceNumber ;
}
function donateAmount(id){
    const donateAmount = document.getElementById(id).value ;
    const donateNumber = parseFloat(donateAmount) ;
    return donateNumber ;
}

function hiddenAddFunction(id){

    document.getElementById('card-id').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
document.getElementById(id).classList.remove('hidden') ;

}
