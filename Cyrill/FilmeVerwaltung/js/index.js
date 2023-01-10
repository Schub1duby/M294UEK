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

$('.modal').modal();





