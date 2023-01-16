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
                    console.log("Auto " + id + " wird getankt");
                    $.ajax({
                        type: "GET",
                        url: "api.php?id=" +id,
                        data: "data",
                        dataType: "JSON",
                        success: function (response) {
                            console.log(response);
                        }
                    });

                    $.ajax({
                        type: "POST",
                        url: "api.php?id=" +id,
                        data: {
                            tank: $(".tank") + 1,
                        },
                        dataType: "JSON",
                        success: function (response) {
                            
                        }
                    });
                });
                
                $('.penBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " bearbeiten");
                    $('#modalTitle').html("edit number " + id);
                    $('.modal').modal('open');
                    $('#modalText').load("sites/form.html",function(){
                        $.getScript("js/form.js");
                    });
                });
                
                $('.deleteBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " loeschen");
                });
            });
    },);



