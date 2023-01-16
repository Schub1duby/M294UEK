$('#login').click(function (e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        type: "LOGIN",
        url: "api.php?username=" + username + "&password=" + password,
        dataType: "json",
        success: function (response) {
            console.log(response);
            if (response.jwt.admin) {
                
                $('#btn-logout').show();
                $('#btn-login').hide();
                $('.table-action').show();
                
            } else {
                $('#btn-login').show();
                $('#btn-logout').hide();
                $('.table-action').hide();
                
            }
        }
    });
});


