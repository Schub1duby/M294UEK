$.get("template/table.hbs",
    function (response) {
        //console.log(response);
        var template = Handlebars.compile(response);
        $.getJSON("data/data.json",
            function (response) {
                //console.log(response);
                $('tbody').html(template(response));

                $('.carBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log("Auto " + id + " wird getankt");
                });
                
                $('.penBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " bearbeiten");
                    $('#modalTitle').html("edit number " + id);
                    $('.modal').modal('open');
                    $.getScript("js/form.js");
                });
                
                $('.deleteBtn').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log(id + " loeschen");
                });
            });
    },);



