$.ajax({
    type: "GET",
    url: "api.php",
    dataType: "json",
    success: function (response) {
        console.log(response);
        if (response.jwt.admin) {
            $('#logout').show();
            $('.thPermission').show();
            $('.tdPermission').attr('visible', false);
            $('.btn.add').show();
            $('#login').hide();
        } else {
            $('#login').show();
            $('.thPermission').hide();
            $('.tdPermission').hide();
            $('.btn.add').hide();
            $('#logout').hide();
        }
    }
});


// Login
$('.modal .modal-footer').click(function (e) {
    e.preventDefault();
    if (document.querySelector('.modal-footer a').innerText == "LOGIN") {


        var name = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            type: "LOGIN",
            url: "api.php?username=" + name + "&password=" + password,
            dataType: "json",
            success: function (response) {
                console.log(response);
                if (response.jwt.admin) {
                    $('#logout').show();
                    $('.thPermission').show();
                    $('.tdPermission').show();
                    $('.btn.add').show();
                    $('#login').hide();
                } else {
                    $('#login').show();
                    $('.thPermission').hide();
                    $('.tdPermission').hide();
                    $('.btn.add').hide();
                    $('#logout').hide();
                }
            }
        });
    }
});

// Logout
$('#logout').click(function (e) {
    e.preventDefault();

    $.ajax({
        type: "LOGOUT",
        url: "api.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            if (response.jwt.admin) {
                $('#logout').show();
                $('.thPermission').show();
                $('.tdPermission').show();
                $('.btn.add').show();
                $('#login').hide();
            } else {
                $('#login').show();
                $('.thPermission').hide();
                $('.tdPermission').hide();
                $('.btn.add').hide();
                $('#logout').hide();
            }
        }
    });
});