
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

                    $.ajax({
                        type: "GET",
                        url: "api.php?id=" + id,
                        data: "data",
                        dataType: "json",
                        success: function (response) {
                            console.log(response);
                            sumUpFranchise(response);
                        }
                    });
                }

                function sumUpFranchise(response) {
                    var id = response.data[0].id;
                    var movieTitle = response.data[0].FilmTitel;
                    var releaseDate = response.data[0].ReleaseYear;
                    var regisseur = response.data[0].Regisseur;
                    var Genre = response.data[0].Genre;
                    var numberOfMoviesInFranchise = response.data[0].NumberOfMoviesInFranchise;
                    var fsk = response.data[0].FSK;

                    console.log(numberOfMoviesInFranchise);
                    numberOfMoviesInFranchise++;
                    console.log(numberOfMoviesInFranchise);
                    
                    $.ajax({
                        type: "POST",
                        url: "api.php?id=" + id,
                        data: {
                            id: id,
                            FilmTitel: movieTitle,
                            ReleaseYear: releaseDate,
                            Regisseur: regisseur,
                            Genre: Genre,
                            NumberOfMoviesInFranchise: numberOfMoviesInFranchise,
                            FSK: fsk,
                            Bemerkung: 'Bemerkung Test',
                            Checkbutton: 'checked'
                        },
                        dataType: "json",
                        success: function (response) {
                            console.log(response);
                            $('main').load("pages/table.html", function () {
                                //code after Load
                                //Ladet JS Code von einem anderen File
                                $.getScript("js/table.js")
                            });
                        }
                    });
                }

                function editMovie(id) {
                    console.log("edit: " + id);
                    $('#modal-title').html("Datensatz mit Id: " + id);
                    $('#modal-content').load("pages/form.html", function () {
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
                            $('main').load("pages/table.html", function () {
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


