var upbutton = document.querySelector('.upbutton');
var up = document.querySelector('.up');
var back = document.querySelector('.back');
var thisPoint;

function WhatIsVisible(vis) {
  if (vis == 1) {
    back.classList.add('hide');
    up.classList.remove('hide');
  }

  if (vis == 2) {
    back.classList.remove('hide');
    up.classList.add('hide');
  }
}

WhatIsVisible(1);

window.onscroll = function() {
  if (window.pageYOffset > 500) {
    check = 0;
    WhatIsVisible(1);

  }
  if (window.pageYOffset == 0 && check == 0) {
    upbutton.style.opacity = 0;
  }
  if (window.pageYOffset > 50) {
    upbutton.style.opacity = 0.9;
  }
}


upbutton.onclick = function(e) {
  if (check == 0) {
    thisPoint = window.pageYOffset;
    up.classList.toggle('hide');
    window.scrollTo(0, 0);
    check = 1;
    WhatIsVisible(2);
    return true;

  }
  if (check == 1) {
    window.scrollTo(0, thisPoint);
    WhatIsVisible(1);
    return true;

  }

}
