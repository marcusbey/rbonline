 mySidePage = document.getElementById("mySidenav");
 main = document.getElementById("main");
 pathLogo = document.getElementById("path");
 mainNav = document.getElementById("mainNav");
 fixedTop = document.querySelector(".fixed-top");


 openNav = () => {
  mySidePage.classList.remove("hide");
  const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (screenWidth < 768) {
    mySidePage.style.width = "95vw";
    main.style.marginLeft = "95vw";
  } else {
  mySidePage.style.width = "50vw";
  main.style.marginLeft = "50vw";
//  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
   }
  document.getElementById("path").style.stroke = "#FFF";
  fixedTop.style.zIndex = 0;
  document.querySelector(".closebtn").style.opacity = 1;

};

 closeNav = () => {
  mySidePage.style.width = "0";
  main.style.marginLeft= "0";
  document.querySelector(".closebtn").style.opacity = 0;
  mainNav.className.includes("navbar-dark") ?
  pathLogo.style.stroke = "rgba(255, 255, 255, 0.8)" :
  pathLogo.style.stroke = "rgba(0, 0, 0, 0.8)";
  fixedTop.style.zIndex = 1030;
};


// vars
 listInterval = 5.5;              // interval in seconds after which the thing changes.
 stopTimeout = listInterval*10;   // time after which all this thing-changing nonsense stops.

// doc ready
$(function() {
  // prepare email
  const mailEncrypt=[101,109,97,105,108,64,114,111,109,97,105,110,98,111,98,111,101,46,99,111,109];
  let mailAddr = '';
  for (let i=0; i<mailEncrypt.length; i++)
    mailAddr+=String.fromCharCode(mailEncrypt[i]);

  $('#mail-link').attr("href", 'mailto:' + mailAddr + '?subject=Hello romain!');

  function newOccupation () {
    const $occupations = $("#occupations li:not(.active)");
    const random = Math.floor(Math.random() * $occupations.length);
    const $choseOne = $occupations.eq(random);
    $("#occupations .active").removeClass("active default");
    $choseOne.addClass("active");
  }

  // init

  const interval = window.setInterval(newOccupation, listInterval * 1000);
  window.setTimeout(function () {
    window.clearInterval(interval);
  }, stopTimeout * 1000);

})(jQuery);





