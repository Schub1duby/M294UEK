$(document).ready(function(){
    $('.sidenav').sidenav();
    $('main').load("sites/tabelle.html", function() {
        //code after load
       $.getScript("js/table.js");
    });
    $('a').click(function (e) {
        e.preventDefault();
    });

    M.toast({html: 'Heissi Füzz i dinre nöchi!'})

    $('.modal').modal();

    $('#add').click(function (e){
        e.preventDefault();
        $('#modalTitle').html("Add Car");
        $('.modal').modal('open');
        $('#modalText').load("sites/form.html",function(){
            $.getScript("js/form.js");
        });
        
    })

    $('saveForm').click(function (e){
        e.preventDefault();
        $('input#id.validate')
        if($('input#id.validate'))
        $.ajax({
            type: "POST",
            url: "api.php",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    })
  });






