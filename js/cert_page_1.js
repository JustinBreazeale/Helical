//Variable Declarations
let showAncient = document.getElementById('ancient_show')
let cardAncient = document.getElementById('card_ancient')
let showAroma = document.getElementById('aroma_show')
let cardAroma = document.getElementById('card_aroma')
let showAstro = document.getElementById('astro_show')
let cardAstro = document.getElementById('card_astro')
//Hiding Cards
cardAncient.style.display = 'none'
cardAroma.style.display = 'none'
cardAstro.style.display = 'none'
//Clcik functions for showing cards
$(showAncient).on('click', ()=>{
  $(cardAncient).toggle()
})
$(showAroma).on('click', ()=>{
  $(cardAroma).toggle()
})
$(showAstro).on('click', ()=>{
  $(cardAstro).toggle()
})