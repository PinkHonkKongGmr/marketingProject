var button=document.querySelector('.maincontent button');
var elmsToShow = document.querySelectorAll('.more');
var toggler = 0;

button.onclick=function (e) {
  for (let elm of elmsToShow){
    elm.classList.toggle('hide');
  }
   if (toggler==0) {
     button.innerText='скрыть';
     toggler=1;
     return true;
   }
   if (toggler==1) {
     button.innerText='показать всё';
     toggler=0;
     return true;
   }

}
