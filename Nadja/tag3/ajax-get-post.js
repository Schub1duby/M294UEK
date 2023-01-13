let id = 0;
let formName = "Peter";

//jqAjax
// INSERT
$.ajax({
    type: "POST", // GET, POST, DELETE
    url: "api.php?id=" + id,
    data: {
        name: formName,
        bemerkung: "Test"
    },
    dataType: "json",
    success: function (response) {
        console.log(response);
    }
});

// GET - ein Datensatz mit id
$.ajax({
    type: "GET", // GET, POST, DELETE
    url: "api.php?id=" + id,
    dataType: "json",
    success: function (response) {
       console.log(response); 
    }
});

// DELETE - ein Datensatz mit id
$.ajax({
    type: "DeLETE", // GET, POST, DELETE
    url: "api.php?id=" + id,
    dataType: "json",
    success: function (response) {
       console.log(response); 
    }
});