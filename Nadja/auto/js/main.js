$('.sidenav').sidenav();

// table in main tag laden
$('main').load("sites/table.html", function () {
    // code after load
    $.getScript("js/table.js");
});

$('.btn.add').click(function (e) { 
    $('#modalTitle').html('Element hinzufügen')
    $('#modalContent').load("sites/form.html", function() {
        $.getScript("js/form.js");
    });
    // console.log("hinzufügen")
});

/* klasse modal soll als modal funktionieren */
$('.modal').modal();