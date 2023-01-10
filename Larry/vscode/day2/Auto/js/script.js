$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('a').click(function (e) {
    e.preventDefault();
});



$('main').load("sites/tabelle.html", function() {
    //code after load
   $.getScript("js/table.js");
});