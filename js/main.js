let $main = $('main');
let $rowDiv = $('<div>');
let $col1 = $('<div>');
let $mainCard = $('<div>');
let $skyPic = $('<img id="sky" src="./assets/sky.jpeg" alt="night sky">');
let $cardBody = $('<div>');
let $cardTitle = $('<h4>');
let $certShowBut = $('<button>');
let $courseLinkList = $('<ul>');
//Page Links
let $link1 = $('<a href="./html/cert_page_1.html">').html('Anciet Astronaut Theorist');
let $link2 = $('<a href="./html/cert_page_1.html">').html('Aromatherapist');
let $link3 = $('<a href="./html/cert_page_1.html">').html('Astrologist');
let $link4 = $('<a href="./html/cert_page_2.html">').html('Cryptozoologist');
let $link5 = $('<a href="./html/cert_page_2.html">').html('Crystal Therapist');
let $link6 = $('<a href="./html/cert_page_2.html">').html('Faith Healer: Ancient Pagan and Shamanistic Traditions').css({
  fontSize : '34px'
})
let $link7 = $('<a href="./html/cert_page_3.html">').html('Paranormal Investigator: Apparition and Ghost Hunter');
let $link8 = $('<a href="./html/cert_page_3.html">').html('Ufologist');
let $link9 = $('<a href="./html/cert_page_3.html">').html('Vampirologist');
//List items
let $list1 = $('<li>').append($link1);
let $list2 = $('<li>').append($link2);
let $list3 = $('<li>').append($link3);
let $list4 = $('<li>').append($link4);
let $list5 = $('<li>').append($link5);
let $list6 = $('<li>').append($link6);
let $list7 = $('<li>').append($link7);
let $list8 = $('<li>').append($link8);
let $list9 = $('<li>').append($link9);
let listArr = [
  $list1,
  $list2,
  $list3,
  $list4,
  $list5,
  $list6,
  $list7,
  $list8,
  $list9
];
//Add links to list
listArr.forEach(function(listItem){
  listItem.appendTo($courseLinkList).addClass('courseLink');
});
$main.append($rowDiv); 
$rowDiv.attr('id', 'row2').addClass('row').addClass('d-flex').addClass('justify-content-center');
$col1.attr('id','column1').css({
    width : '100%'
});
//Add row
$rowDiv.append($col1);
$mainCard.attr('id', 'card_one').addClass('card');
//Add column 
$col1.append($mainCard);
//Add Pic 
$mainCard.append($skyPic);
$cardBody.addClass('card-body').addClass('text-center');
//Add card body
$mainCard.append($cardBody);
$cardTitle.addClass('card-title').addClass('text-center');
$certShowBut.attr('id', 'cert-show').html('Certificate Programs');
//Add Card Title
$cardBody.append($cardTitle);
//Add Button
$cardTitle.append($certShowBut);
$courseLinkList.hide();
$courseLinkList.attr('id', 'course-link-list').css({
    listStyle : 'none'
});
$cardBody.append($courseLinkList);
$certShowBut.on('click', ()=>{
  // $courseLinkList.fadeIn('slow');
  $courseLinkList.fadeToggle('slow')
});





