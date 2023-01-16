var id = 0;
var form_name = "Gottfried";
var bemerkung

//INSERT
$.ajax({
    type: "POST", //GET, POST, DELETE
    url: "api.php?id=" + id, //für neuen Eintrag id = 0
    data: {
        name: form_name,
        bemerkung: 'Halli Hallo'
    },
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});

//GET
$.ajax({
    type: "GET",
    url: "api.php?id=" + id, //für alle Datensätze id=0, ansonten ID für spezifischen Datensatz angeben
    data: {
        name: form_name,
        bemerkung: 'Halli Hallo'
    },
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});

//DELETE
$.ajax({
    type: "DELETE", 
    url: "api.php?id=" + id, //id für Datensatz angeben, von welchem gelöscht werden soll
    data: {
        name: form_name,
        bemerkung: 'Halli Hallo'
    },
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});