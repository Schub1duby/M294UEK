$('select').formSelect();
$('.datepicker').datepicker();

$('#save').click(function (e) {
    e.preventDefault();
    insertMovie(true)
    
});



function insertMovie(booleanNew) {
    var id = $('#id').val('4');
    var movieTitle = $('#Film-Titel').val();

    

    console.log(movieTitle)
    $.ajax({
        type: "POST", //GET, POST, DELETE
        url: "api.php?id=0",  //für neuen Eintrag id = 0
        data: {
            id: 4,
            FilmTitel: movieTitle,
            Bemerkung: 'Halli Hallo'
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });

    $('main').load("pages/table.html", function(){
        //code after Load
        //Ladet JS Code von einem anderen File
        $.getScript("js/table.js");
    });
}