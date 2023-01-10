$.get("template/table.hbs",
    function (response) {
        // console.log(response);
        //Hole das Template in eine Variabel
        var template = Handlebars.compile(response);
        $.getJSON("data/data.json",
            function (response) {
                // console.log(response);
                //Lade das Template in die Tabelle hinein und fülle es mit den Daten ab
                $('tbody').html(template(response))
                
                //Wichtig ist, dass Event Listener genau in die gleiche Funktion gleich weiter unten hinzugefügt werden
                // 
                $('.addNewPartOfFranchise').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log("ACHTUNG NEUE FORSETZUNG: " + id);
                
                });
                
                $('.editMovie').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log("edit: " + id);
                    $('#modal-title').html("Datensatz mit Id: " + id);
                    $('#modal-content').load("pages/form.html");
                    $('.modal').modal('open');
                });
                
                $('.deleteMovie').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    console.log("Löschen: " + id);
                });
                
            }
        );
    }
);


