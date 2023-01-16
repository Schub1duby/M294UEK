//jqGet
$.get("template/table.hbs", function (response) {
    var template = Handlebars.compile(response);
    // jqGetJson
    $.getJSON("api.php",
        //$.getJSON("data/data.json", 
        function (response) {
            // console.log(response);
            $('tbody').html(template(response));

            $('.btn.tank').click(function (e) {
                var id = $(this).parent().parent().attr('data-id');

                $.ajax({
                    type: "GET",
                    url: "api.php?id=" + id,
                    dataType: "json",
                    success: function (response) {
                        addTank(id, response);
                    }
                });

            });

            $('.btn.edit').click(function (e) {
                var id = $(this).parent().parent().attr('data-id');
                $('#modalTitle').html('Edit: ' + id);
                $('#modalContent').load("sites/form.html");
                $('.modal-footer a').html("Speichern");
                $.getScript("js/form.js", function () {
                    fillForm(id);
                });
                $('.modal').modal('open');
            });

            $('.btn.delete').click(function (e) {
                var id = $(this).parent().parent().attr('data-id');
                $.ajax({
                    type: "DELETE",
                    url: "api.php?id=" + id,
                    dataType: "json",
                    success: function (response) {}
                });
                $.getScript("js/table.js", function (response) {});
            });
            $.getScript("js/login.js")
        }
    );
});


/* $.getJSON("data/data.json", function (response) {
    // console.log(response);
}); */

function addTank(id, response) {
    let tank = response.data[0].tanken;
    tank++;

    let car = response.data[0].name;
    let kraft = response.data[0].kraftstoff;
    let color = response.data[0].farbe;
    let bau = response.data[0].bauart;
    let baujahr = response.data[0].datum;

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