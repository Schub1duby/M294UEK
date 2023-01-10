$(document).ready(function(){
    $('.sidenav').sidenav();
    $('main').load("sites/tabelle.html", function() {
        //code after load
       $.getScript("js/table.js");
    });
    $('a').click(function (e) {
        e.preventDefault();
    });

    $('.modal').modal();

    $('#add').click(function (e){
        e.preventDefault();
        $('#modalTitle').html("Add Car");
        $('.modal').modal('open');
        $.getScript("js/form.js");
    })
  });





