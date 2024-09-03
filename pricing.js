//Variable Dclarations for student loans and scholarships
let loanRow = document.getElementsByClassName('loan_row');
let loanPara = document.getElementsByClassName('loan_para');
let loanHead = document.getElementById('loan_head');
let loanLink = document.createElement('h2');
let loanCol = document.getElementById('loan_col');
//Making arrays from node lists of rows and paragraphs
let paraArr = Array.from(loanPara);
let rowArr = Array.from(loanRow);
//Variable declaration for certificate buttons
let buttons = document.querySelectorAll('button');
//Making arrays from node list of buttons
let buttonArr = Array.from(buttons);
//Limiting array to certain buttons
let arrSlice = buttonArr.splice(4,6);
//Adding text to loan link
loanLink.innerHTML = 'Contact us with link below';
//Adding variables to page
loanCol.appendChild(loanLink);
loanLink.style.display = 'none';
//Loop through array to hide each element
paraArr.forEach(function(para){
para.style.display = 'none';
});
//Mouse event functionality 
rowArr[1].style.marginTop = '100px';
rowArr[0].addEventListener('mouseenter',(e)=>{
  e.target.classList.add('shine');
 paraArr[0].style.display = 'inline-block';;
});
rowArr[1].addEventListener('mouseenter',(e)=>{
  e.target.classList.add('shine');
  paraArr[1].style.display = 'inline-block';
});
loanRow[0].addEventListener('mouseleave',(e)=>{
  loanLink.style.display = 'inline-block';
  loanRow[0].style.textAlign = 'center';
  paraArr[0].style.display = 'none';
});
loanRow[1].addEventListener('mouseleave',(e)=>{
  loanLink.style.display = 'inline-block';
  loanRow[1].style.textAlign = 'center';
  paraArr[1].style.display = 'none';
});
//Variable declarations for modal
let modLabel = document.getElementById('modal_label');
let modParaCourse = document.getElementById('mod_paraTop');
let modParaTime = document.getElementById('mod_paraMid');
let modParaCost = document.getElementById('mod_paraBot');
//Modal object with constructor and method 
class ModalObj{
  constructor(certName, courses, time, cost){;
    this.certName = certName;
    this.courses = courses;
    this.time = time;
    this.cost = cost;
  }
  place(){
    $(modLabel).html(this.certName);
    $(modParaCourse).html(this.courses);
    $(modParaTime).html(this.time);
    $(modParaCost).html(this.cost);
  }
}
//Instances of ModalObj
let associate = new ModalObj('Associates Certificate', '10 courses', 'Approximately six months', '$ 44.98 USD, per course');
let professional = new ModalObj('Professional Certificate', '10 courses', 'Approximately six months', '$ 46.62 USD, per course' );
let master = new ModalObj('Master Certificate', '10 Courses', 'Approximately six months', '$ 49.97 USD, per course');
let credAgent = new ModalObj('Credentialed Agent', '5 courses', 'Approximately three months', '$ 96.53 USD, per course');
//Refrencing buttons array to place objects on modal with place() method
buttonArr[0].addEventListener('click',()=>{
  associate.place();
});
buttonArr[1].addEventListener('click',()=>{
  professional.place();
});
buttonArr[2].addEventListener('click',()=>{
  master.place()
});
buttonArr[3].addEventListener('click',()=>{
  credAgent.place()
});