let pName;
let km;
let age; 
let message;
let price;
let discount;
let dicountMessage;
let valid = 0;
const ticket = document.getElementById('ticket');


const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');

generateButton.addEventListener('click', generateTicket);
resetButton.addEventListener('click', clearAll);

//funzione genera biglietto
function generateTicket(){
  
  //input
  pName = (document.getElementById("name")).value;
  km = (document.getElementById("km")).value;
  age = (document.getElementById("age")).value;
  console.log (pName);
  console.log (km);
  console.log (age);

  //controllo su km
  if(isNaN(km)){
    message = "Inserisci un numero di km valido";
    alert(message);
  }else{
    valid = 1;
  }
  
  console.log(valid);

  if(valid){
    
    //definizione dello sconto
    if(age == 'under-age' ) {
      discount = 20;
      dicountMessage = "Offerta Young";
    }else if (age == 'senior'){
      discount = 40;
      dicountMessage = "Offerta Senior";
    }else {
      discount = 0;
      dicountMessage = "Offerta Standard";
    }

    console.log(discount);
    

    //calcolo del prezzo 
    price = km * 0.21;
    price *= 1 - (discount/100);
    price = price.toFixed(2);

    console.log(price);
  
    //stampa dei dati
    document.getElementById("name-out").innerHTML = pName;
    document.getElementById("discount-out").innerHTML = dicountMessage;
    document.getElementById("price-out").innerHTML = price;

    //mostro biglietto
    ticket.classList.remove("d-none");

  }

}

function clearAll() {

  console.log("erased");

  //input
  pName = document.getElementById("name");
  km = document.getElementById("km");
  age = document.getElementById("age");

  //reset degli input 
  pName.reset();
  km.reset();
  age.reset();


  //nascondo biglietto
  ticket.classList.add("d-none");
}
