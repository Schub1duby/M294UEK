$('.sidenav').sidenav();

// table in main tag laden
$('main').load("sites/table.html", function () {
    // code after load
    $.getScript("js/table.js");
});

$('#login').click(function (e) {
    $('#modalTitle').html("Login");
    $('#modalContent').load("sites/login.html");
    $('.modal-footer a').html("Login");
});

$('.btn.add').click(function (e) {
    $('#modalTitle').html('Element hinzufügen');
    $('.modal-footer a').html("Speichern");
    $('#modalContent').load("sites/form.html", function () {
        $.getScript("js/form.js");

    });
    // console.log("hinzufügen")
});

/* klasse modal soll als modal funktionieren */
$('.modal').modal();


$('.modal .modal-footer').click(function (e) {
    if (document.querySelector('.modal-footer a').innerText == "SPEICHERN") {
        if ($('#id').val() == null || $('#id').val().length == 0) {
            var id = 0;
        } else {
            var id = $('#id').val();
        }

        let car = $('#name').val();
        let kraft;
        $('input:radio[name=kraftstoff]:checked').each(function () {
            kraft = $(this).val();
        })

        let color = $('#farbe').val();

        let bau;
        $('option:selected').each(function () {
            bau = $(this).val();
        });

        let tank = $('#tank').val();

        let baujahr = $('#datePicker').val();

        $.ajax({
            type: "POST",
            url: "api.php?id=" + id,
            data: {
                name: car,
                kraftstoff: kraft,
                farbe: color,
                bauart: bau,
                tanken: tank,
                datum: baujahr
            },
            dataType: "json",
            success: function (response) {
                $('main').load("sites/table.html", function () {
                    // code after load
                    $.getScript("js/table.js");
                });
                
            }
        });

    }
});

$(document).ready(function () {
    $.getScript("js/login.js");
});