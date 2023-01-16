
$.get("template/table.hbs",
    function (response) {
        // console.log(response);
        //Hole das Template in eine Variabel
        var template = Handlebars.compile(response);
        //$.getJSON("data/data.json",
        $.getJSON("api.php",
            function (response) {
                // console.log(response);
                //Lade das Template in die Tabelle hinein und fülle es mit den Daten ab
                $('tbody').html(template(response))
                
                //Wichtig ist, dass Event Listener genau in die gleiche Funktion gleich weiter unten hinzugefügt werden
                // 
                $('.addNewPartOfFranchise').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    addNewFranchise(id);
                });
                
                $('.editMovie').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    editMovie(id);
                });
                
                $('.deleteMovie').click(function (e) {
                    e.preventDefault();
                    var id = $(this).parent().parent().attr('data-id');
                    deleteMovie(id);
                });

                function addNewFranchise(id) {
                    console.log("ACHTUNG NEUE FORSETZUNG: " + id);
                }

                function editMovie(id) {
                    console.log("edit: " + id);
                    $('#modal-title').html("Datensatz mit Id: " + id);
                    $('#modal-content').load("pages/form.html", function(){
                        $.getScript('js/form.js');
                    });

                    $('.modal').modal('open');


                    
                }

                function deleteMovie(id) {
                    console.log("Löschen: " + id);

                    $.ajax({
                        type: "DELETE", 
                        url: "api.php?id=" + id, //id für Datensatz angeben, von welchem gelöscht werden soll
                        dataType: "json",
                        //Wenn der Request Erfolgreich war, dann wird der Table einfach nochmals neu geladen und der Datensatz ist dan nicht mehr da
                        success: function (response) {
                            console.log(response);
                            $('main').load("pages/table.html", function(){
                                //code after Load
                                //Ladet JS Code von einem anderen File
                                $.getScript("js/table.js");
                            });
                        }
                    });
                }
                
            }
        );
    }
);


