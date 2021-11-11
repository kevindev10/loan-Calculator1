
//Listen for Submit

document.querySelector('#loan-form').addEventListener('submit', function(e){
  
  //hide resluts
   document.querySelector('#results').style.display = 'none';

  //show spinner
  document.querySelector('#loading').style.display = 'block';

  //run calcutate function after 2 second delay

  setTimeout(calculateResults, 2000)




  e.preventDefault();
});


//calculate loan function

function calculateResults (){
 
  
  //UI VARIABLES

  const amountUI = document.querySelector('#amount');  //1000
  const interestUI = document.querySelector('#interest'); //5
  const yearsUI = document.querySelector('#years'); //1
  const monthlyPaymentUI = document.querySelector('#monthly-payment');
  const totalPaymentUI = document.querySelector('#total-payment');
  const totalInterestUI = document.querySelector('#total-interest');





  const amountUI001= parseFloat(amountUI.value);
  const interestUI001 = parseFloat(interestUI.value);
  const paymentPeriodInMonths001 = parseFloat(yearsUI.value)*12;

  const checkInputValue = amountUI001*interestUI001*parseFloat(yearsUI.value)
  
 


  if( isFinite(checkInputValue )){


      
  //Compute monthly payment 

          //total interest 
          const totalInterest001 = amountUI001 * interestUI001/100; 
          
          //interest per month 
          const InterestPerMonth001 = totalInterest001/paymentPeriodInMonths001;
          

          //total payment per month minus interest
          const paymentMonthlyNoInterest = amountUI001 / paymentPeriodInMonths001; 


          // monthly payment plus interest per month
          const totalMonthlyPayment001  = paymentMonthlyNoInterest + InterestPerMonth001 ;

          monthlyPaymentUI.value = totalMonthlyPayment001.toFixed(2)


 //Compute total payment   
 
    const totalPayment001 = amountUI001 + totalInterest001;

    totalPaymentUI.value = totalPayment001.toFixed(2)

 //Compute total interest    
 
   totalInterestUI.value = totalInterest001.toFixed(2); 

    //hide spinner
  document.querySelector('#loading').style.display = 'none';


  //show resluts
  document.querySelector('#results').style.display = 'block';

 

    
  }else{

    showError("Check your numbers")
       //hide spinner
  document.querySelector('#loading').style.display = 'none';


  //hide resluts
  document.querySelector('#results').style.display = 'none';


    
  }


  //showError function

   function showError(error){

    //create error div element

    const errDiv = document.createElement('div');

    //add bootstrap classes
    errDiv.className = "alert alert-danger";

    //add text node and append to err div

    errDiv.appendChild(document.createTextNode(error));

    //console.log(errDiv);

    //get location where you want the div to appear

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //insert erro div

     card.insertBefore(errDiv, heading);


    
     //clear error 

   
    setTimeout(clearError, 3000);

    function clearError(){
      document.querySelector('.alert').remove();
    }



   } 


    

  //console.log(typeof calculatedMonthlyPayments)
 
  
}