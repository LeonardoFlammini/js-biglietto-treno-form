let km;
let age; 
let message;
let price;
let discount;
let valid = 0;



if(isNaN(km)){
  message = "Inserisci un numero di km valido";
  alert(message);
}else if(isNaN(age)){
  message = "inserisci un' età valida";
  alert(message);
}else{
  valid = 1;
}

if(valid){
  
  //definizione dello sconto
  if(age < 18 ) {
    discount = 20;
  }else if (age >= 65){
    discount = 40;
  }else {
    discount = 0;
  }

  //calcolo del prezzo 
  price = km * 0.21;
  price *= 1 - (discount/100);
  price = price.toFixed(2);

  //stampa dei dati

}



console.log(message); 
console.log(age);
console.log(km);
console.log(discount);
console.log(price);

