$.get("template/table.hbs",
    function (response) {
        //console.log(response);
        var template = Handlebars.compile(response);
        //$.getJSON("data/data.json",
        $.getJSON("api.php",
            function (response) {
                //console.log(response);
                $('tbody').html(template(response));

                $('.carBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    
                    $.ajax({
                        type: "GET",
                        url: "api.php?id=" + id,
                        data: "data",
                        dataType: "JSON",
                        success: function (response) {
                            var name = response.data[0].name;
                            var treibstoff = response.data[0].treibstoff;
                            var farbe = response.data[0].farbe;
                            var bauart = response.data[0].bauart;
                            var inverkehrssetzung = response.data[0].inverkehrssetzung;
                            var beschreibung = response.data[0].beschreibung;
                            var tank = response.data[0].tank;

                            $.ajax({
                                type: "POST",
                                url: "api.php?id=" + id,
                                data: {
                                    name: name,
                                    treibstoff: treibstoff,
                                    farbe: farbe,
                                    bauart: bauart,
                                    inverkehrssetzung: inverkehrssetzung,
                                    beschreibung: beschreibung,
                                    tank: parseInt(tank) + 1
                                    
                                },
                                dataType: "JSON",
                                success: function (response) {
        
                                }
                            });
                        }
                    });
                    
                    console.log("Auto " + id + " wird getankt");
                });

                $('.penBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " bearbeiten");
                    $('#modalTitle').html("edit number " + id);
                    $('.modal').modal('open');
                    $('#modalText').load("sites/form.html", function () {
                        $.getScript("js/form.js");
                    });
                    $.ajax({
                        type: "GET",
                        url: "api.php?id=" + id,
                        data: "data",
                        dataType: "json",
                        success: function (response) {
                            var name = response.data[0].name;
                            var treibstoff = response.data[0].treibstoff;
                            var farbe = response.data[0].farbe;
                            var bauart = response.data[0].bauart;
                            var inverkehrssetzung = response.data[0].inverkehrssetzung;
                            var beschreibung = response.data[0].beschreibung;
                            var tank = response.data[0].tank;

                            $('input#id.validate').val(id);
                            $('input#name.validate').val(name);
                            $('input#kraftstoff.validate').val(treibstoff);
                            $('input#farbe.validate').addClass(farbe);
                            $('input#bauart.validate').val(bauart);

                        }

                    });
                });

                $('.deleteBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " loeschen");

                    $.ajax({
                        type: "DELETE",
                        url: "api.php?id=" + id,
                        data: "data",
                        dataType: "JSON",
                        success: function (response) {

                        }
                    });
                });
            });
    },);



