/* document ready: jqDocReadyShort */
/* $(function () {
    $('#test').html('ich war erfolgreich');
}); */

$('#title').html('Hello World');
console.log($('#title').html());

$('#test').html('ich war erfolgreich');
$('.testing').html('ich war ebenfalls erfolgreich');

// Events
/* jqClick:
$(selector).click(function (e) { 
    e.preventDefault();
    $(this.html('clicked));
});
*/

$('.cta').click(function (e) { 
    e.preventDefault();
    console.log('cta');
//    $('#test').hide();
//    $('#test').show();
    $('.testing').toggle();
//    $('body').append('<h2>Untertitel</h2>');
//    $('body').prepend('<h2>Obertitel</h2>');
});

// .dblclick()
// .addClass()
// .removeClass()
// .toggleClass()
// .attr('id')
