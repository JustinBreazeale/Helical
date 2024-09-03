//Variable Declarations
let showParaInvest = document.getElementById('parainvest_show')
let cardParaInvest = document.getElementById('card_parainvest')
let showUfo = document.getElementById('ufo_show')
let cardUfo = document.getElementById('card_ufo')
let showVamp = document.getElementById('vamp_show')
let cardVamp = document.getElementById('card_vamp')
//Hiding Cards
cardParaInvest.style.display = 'none'
cardUfo.style.display = 'none'
cardVamp.style.display = 'none'
//Clcik functions for showing cards
$(showParaInvest).on('click', ()=>{
  $(cardParaInvest).toggle()
})
$(showUfo).on('click', ()=>{
  $(cardUfo).toggle()
})
$(showVamp).on('click', ()=>{
  $(cardVamp).toggle()
})
