$("#h11").html("Das ist ein Text");


//Zwei EventListener miteinandern geschrieben
$('#clickme').click(function() { 
    $(this).html('clicked');
    $('body').append('<p> STFU </p>');
    
}).dblclick(function(){
    $(this).html('You have ADHD');
});


//fügt eine neue Klasse zu einem Element hinzu
$('#clickme').addClass('blue');



$('#send').click(function(e){
    e.preventDefault();
    //liest den Wert aus dem Textinput und schreibt sie in die Variabel
    let name = $('#name').val();
    console.log(name);
});