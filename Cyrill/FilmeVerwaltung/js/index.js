$('.sidenav').sidenav();


$('a').click(function (e) { 
    //verhindert, dass der Link geöffnet wird
    e.preventDefault();
    
});


//load Table in main
$('main').load("pages/table.html", function(){
    //code after Load
    //Ladet JS Code von einem anderen File
    $.getScript("js/table.js") 
});


$('#add').click(function (e) {
    e.preventDefault();
    $('#modal-title').html("Neuer Datensatz");
    $('#modal-content').load("pages/form.html", function () { 
        $.getScript("js/form.js");
     });
    
    $('.modal').modal('open');
});


$('.modal').modal();

