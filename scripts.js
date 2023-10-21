const convertbutton = document.querySelector(".convert")

const select1 = document.querySelector(".select-1")
const select2 = document.querySelector(".select-2")

function convertValue() {
     const inputValue = document.querySelector(".inputValue").value

     const currencyValueToConvert = document.querySelector(".reference")//"BRL" value//

     const currencyValueConverted = document.querySelector(".quantity")//USD value//

     console.log (select1.value)


     const realValue = 1
     const dollarValue = 5.04
     const euroValue = 5.33
     const libraValue = 6.14
     const bitcoinValue = 143403.7



     const ConvertedValue = inputValue / dollarValue



     
     
     
     
     if(select2.value == "real"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
               style: "currency", currency: "BRL"
          }
          ).format(inputValue / realValue)
     } 
     if (select2.value == "dolar") {
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
               style: "currency", currency: "USD"
          }
          ).format(inputValue / dollarValue)
     }
     if(select2.value == "euro"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
               style: "currency", currency: "EUR"
          }
          ).format(inputValue / euroValue) 
     }
     if(select2.value == "libra"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-EN", {
               style: "currency", currency: "GBP"
          }
          ).format(inputValue / libraValue)
     }
     if(select2.value == "bitcoin"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
               style: "currency", currency: "BTC"
          }
          ).format(inputValue / bitcoinValue)
     }


     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
          style: "currency", currency: "BRL"
     }
     ).format(inputValue)


     console.log(ConvertedValue)

}

function currencyChange() {
     const textChange = document.querySelector(".americanDolar")
     const imgChange = document.querySelector(".currencyImg")
     if (select2.value == "dolar") {
          textChange.innerHTML = "Dólar Americano"
          imgChange.src = "./assets/US.png"
     }
     
     if(select2.value == "euro"){
          textChange.innerHTML = "Euro"
          imgChange.src = "./assets/European Money.png"
     }

     if(select2.value == "libra"){
          textChange.innerHTML = "Libra"
          imgChange.src = "./assets/libra.png"
     }
     
     if(select2.value == "bitcoin"){
          textChange.innerHTML = "Bitcoin"
          imgChange.src = "./assets/bitcoin.png"
     }    

     convertValue()
}


select2.addEventListener("change", currencyChange)
convertbutton.addEventListener("click", convertValue)