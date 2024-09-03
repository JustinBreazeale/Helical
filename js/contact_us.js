//Speech setup
const synth = window.speechSynthesis;
//Voice selection dropdown variables
let voiceSelect = document.getElementById('language_dropdown')
//Card variables
let formCard = document.getElementById('card_body');
let formShow = document.getElementById('show_form_but');
// Form variables
let form = document.getElementById('contact_form');
let firstName = document.getElementById('f_name');
let lastName = document.getElementById('l_name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let about_u = document.getElementById('about');
//Voice Array and function to populate array and create option elements for the dropdown menu(select element in html)
let voices = []
function addVoices(){
  voices = synth.getVoices()
  for(let i = 0; i < voices.length; i++){
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
//Set attributes of each iterated option for refrence later
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
//Append option elements to select element
    voiceSelect.appendChild(option);
  }
}
addVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoices;
}
$(formCard).hide();
$(formShow).on('click', ()=>{
  $(formCard).toggle();
});
//Form submission function
$(form).on('submit', ()=>{
  let utterThis = new SpeechSynthesisUtterance(`Thank you ${firstName.value} we will contact you soon`);
  let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  localStorage.setItem('First Name:', firstName.value);
  localStorage.setItem('Last Name:', lastName.value);
  localStorage.setItem('Email', email.value);
  localStorage.setItem('Phone', phone.value);
  localStorage.setItem('About', about_u.value);
});