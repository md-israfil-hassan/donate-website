document.getElementById('donate-btn').addEventListener('click', function(){
    
    const balanceNumber = donateMyAccountBalance('account-balance') ;
    const donateNumber = donateAmount('donate-input') ;
    const submitAmount = donateMyAccountBalance('submit-amount');

    const inputField = document.getElementById('donate-input')

const totalDonate = donateNumber + submitAmount ;
const accountToDonate = balanceNumber - donateNumber;

if( balanceNumber > donateNumber ){
    
    document.getElementById('submit-amount').innerText=totalDonate +' BDT' ;
    document.getElementById('account-balance').innerText=accountToDonate+' BDT' ;
inputField.value='' ;

const div = document.createElement('div')
div.innerHTML=`
 <div class="border-2 mb-4 p-10 rounded-2xl border-gray-200 "> 
    <h1 class="text-xl mb-5 font-bold ">${totalDonate} Taka is Donated for Noakhali-2024 at Noakhali,Bangladesh </h1>
      <p class="text-xl font-light">Date:${new Date("2022-03-25")}</p>
  </div>
`;
document.getElementById('history-section').appendChild(div)

}
else{
    alert('Please Money added to Donate')
}

})

// second Card >>>

document.getElementById('second-donate-btn').addEventListener('click', function(){
    
    const balanceNumber = donateMyAccountBalance('account-balance') ;
    const donateNumber = donateAmount('second-donate-input') ;
    const submitAmount = donateMyAccountBalance('second-submit-amount');

    const inputField = document.getElementById('second-donate-input')

const totalDonate = donateNumber + submitAmount ;
const accountToDonate = balanceNumber - donateNumber;

if( balanceNumber > donateNumber ){

    document.getElementById('second-submit-amount').innerText=totalDonate +' BDT' ;
    document.getElementById('account-balance').innerText=accountToDonate+' BDT' ;
inputField.value='' ;
const div = document.createElement('div')
div.innerHTML=`
 <div class="border-2 mb-4 p-10 rounded-2xl border-gray-200 "> 
    <h1 class="text-xl mb-5 font-bold ">${totalDonate} Donate for Flood Relief in Feni,Bangladesh
Bangladesh </h1>
      <p class="text-xl font-light">Date:${new Date("2022-03-25")}</p>
  </div>
`;
document.getElementById('history-section').appendChild(div)
}
else{
    alert('Please Money added to Donate')
}

})

//third card>>>> 

document.getElementById('third-donate-btn').addEventListener('click', function(){
    
    const balanceNumber = donateMyAccountBalance('account-balance') ;
    const donateNumber = donateAmount('third-donate-input') ;
    const submitAmount = donateMyAccountBalance('third-submit-amount');

    const inputField = document.getElementById('third-donate-input')

const totalDonate = donateNumber + submitAmount ;
const accountToDonate = balanceNumber - donateNumber;

if( balanceNumber > donateNumber ){

    document.getElementById('third-submit-amount').innerText=totalDonate +' BDT' ;
    document.getElementById('account-balance').innerText=accountToDonate+' BDT' ;
inputField.value='' ;

const div = document.createElement('div')
div.innerHTML=`
 <div class="border-2 p-10 mb-4 rounded-2xl border-gray-200 "> 
    <h1 class="text-xl mb-5 font-bold ">${totalDonate} Aid for Injured in the Quota Movement Bangladesh</h1>
      <p class="text-xl font-light">Date:${new Date("2022-03-25")}</p>
  </div>
`;
document.getElementById('history-section').appendChild(div)

}
else{
    alert('Please Money added to Donate')
}

})

///

document.getElementById('history-page-btn').addEventListener('click', function(){

    hiddenAddFunction('history-section')

    const btn = document.getElementById('history-page-btn')
    btn.style.backgroundColor = '#B4F461' ;
})

document.getElementById('donate-page-btn').addEventListener('click', function(){

    hiddenAddFunction('card-id')

    const btn = document.getElementById('donate-page-btn')
    btn.style.backgroundColor = '#B4F461' ;
})
