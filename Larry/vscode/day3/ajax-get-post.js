var id = 0;
var formName = "Hansueli"

//INSERT
$.ajax({
    type: "POST", //get, post or delete
    url: "api.php?id=" + id,
    data: {
        name: formName,
        bemerkung: 'test'
    },
    dataType: "json", //Immer JSON,
    success: function (response) {
        console.log(response);
    }
});

id = 0;
//ADD
$.ajax({
    type: "POST", //get, post or delete
    url: "api.php?id=" + id,
    data: {
        name: formName,
        bemerkung: 'test'
    },
    dataType: "json", //Immer JSON,
    success: function (response) {
        console.log(response);
    }
});

id = 3;
//GET - alles
$.ajax({
    type: "GET", //get, post or delete
    url: "api.php", 
    dataType: "json", //Immer JSON,
    success: function (response) {
        console.log(response);
    }
});

id = 3;
//GET - 1 datensatz mit ID
$.ajax({
    type: "GET", //get, post or delete
    url: "api.php?id=" + id, 
    dataType: "json", //Immer JSON,
    success: function (response) {
        console.log(response);
    }
});

//DELETE
$.ajax({
    type: "DELETE", //get, post or delete
    url: "api.php?id=" + id, 
    dataType: "json", //Immer JSON,
    success: function (response) {
        console.log(response);
    }
});