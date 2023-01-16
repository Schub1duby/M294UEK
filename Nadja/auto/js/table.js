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
            console.log("Tanken: " + id);
        });
        $('.btn.edit').click(function (e) {
            var id = $(this).parent().parent().attr('data-id');
            console.log("editieren: " + id);
            $('#modalTitle').html('Edit: ' + id);
            $('#modalContent').load("sites/form.html");
            $('.modal').modal('open');
        });

        $('.btn.delete').click(function (e) {
            var id = $(this).parent().parent().attr('data-id');
            console.log("löschen: " + id);
        });

        
    });
});

/* $.getJSON("data/data.json", function (response) {
    // console.log(response);
}); */