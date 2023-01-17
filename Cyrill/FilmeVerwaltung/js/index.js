$(function () {

    console.log('Programm Startet');

    $('main').load("pages/table.html", function () {
        //code after Load
        //Ladet JS Code von einem anderen File
        $.getScript("js/table.js")
    });

    //Irgendwie war dieser Code nötig, damit nicht standardmässig alles angezeigt wird
    $('.table-action').hide();

    $.ajax({
        type: "GET",
        url: "api.php",
        dataType: "json",
        success: function (response) {
            if (response.jwt.admin) {
                $('#btn-logout').show();
                $('#btn-login').hide();
                $('.table-action').show();
            } else {
                $('#btn-login').show();
                $('#btn-logout').hide();
                $('.table-action').hide();
                

            }
        }
    });
});

$('#btn-logout').click(function (e) {
    e.preventDefault();
    console.log('logout');
    $.ajax({
        type: "LOGOUT",
        url: "api.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            if (response.jwt.admin) {
                $('#btn-logout').show();
                $('#btn-login').hide();
                $('.table-action').show();
            } else {
                $('#btn-login').show();
                $('#btn-logout').hide();
                $('.table-action').hide();
                

            }
        }
    });
});


$('.sidenav').sidenav();


$('a').click(function (e) {
    //verhindert, dass der Link geöffnet wird
    e.preventDefault();

});

$('#btn-login').click(function (e) {
    e.preventDefault();
    $('#modal-Login-title').html("Login");
    $('#modal-Login-content').load("pages/login.html", function () {
        $.getScript("js/login.js");
    });

    $('#modalLogin').modal('open');
});


//load Table in main



$('#add').click(function (e) {
    e.preventDefault();
    $('#modal-Insert-title').html("Neuer Datensatz");
    $('#modal-Insert-content').load("pages/formInsert.html", function () {
        $.getScript("js/formInsert.js");
    });

    $('#modalInsert').modal('open');
});


$('.modal').modal();

