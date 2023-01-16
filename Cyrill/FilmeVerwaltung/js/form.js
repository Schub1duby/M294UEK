$('select').formSelect();
$('.datepicker').datepicker();

$('#save').click(function (e) {
    e.preventDefault();
    insertMovie(true);

});



function insertMovie(newMovie) {
    var id = $('#id').val();
    var movieTitle = $('#Film-Titel').val();
    var releaseDate = $('#release-date').val();
    var regisseur = $('#regisseur').val();
    var Genre = $('#Genre').val();
    var moviesInFranchise = $('#count-movie').val();
    var fsk = $('#fsk').val();

    console.log(movieTitle)
    $.ajax({
        type: "POST",
        url: "api.php",
        data: {
            id: id,
            FilmTitel: movieTitle,
            ReleaseYear: releaseDate,
            Regisseur: regisseur,
            Genre: Genre,
            NumberOfMoviesInFranchise: moviesInFranchise,
            FSK: fsk,
            Bemerkung: 'Bemerkung Test',
            Checkbutton: 'checked'
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('main').load("pages/table.html", function(){
                //code after Load
                //Ladet JS Code von einem anderen File
                $.getScript("js/table.js") 
            });
        }
    });
 

}