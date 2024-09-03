//Variable Declarations
let showCrypto = document.getElementById('crypto_show')
let cardCrypto = document.getElementById('card_crypto')
let showCrystal = document.getElementById('crystal_show')
let cardCrystal = document.getElementById('card_crystal')
let showFaith = document.getElementById('faith_show')
let cardFaith = document.getElementById('card_faith')
//Hiding Cards
cardFaith.style.display = 'none'
cardCrypto.style.display = 'none'
cardCrystal.style.display = 'none'
//Clcik functions for showing cards
$(showCrypto).on('click', ()=>{
  $(cardCrypto).toggle()
})
$(showCrystal).on('click', ()=>{
  $(cardCrystal).toggle()
})
$(showFaith).on('click', ()=>{
  $(cardFaith).toggle()
})