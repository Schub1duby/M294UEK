// select dropdown aktivieren
$('select').formSelect();

// datepicker
$('.datepicker').datepicker({
    format: "dd/mm/yyyy",
    i18n: {
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
            'September', 'Oktober', 'November', 'Dezember'
        ],
        monthsShort: ['Jan', 'Feb', 'Mär', 'Mai', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt',
            'Nov', 'Dez'
        ],
        weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag',
            'Samstag'
        ],
        weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        cancel: "Abbrechen",
        clear: "Löschen",
        done: "Fertig"
    }
});

// Formularfelder mit bestehenden Daten befüllen
function fillForm (id) { 
    $.ajax({
        type: "GET", // GET, POST, DELETE
        url: "api.php?id=" + id,
        dataType: "json",
        success: function (response) {
            // id
            console.log(response);
            $('#id').val(id);
            // name
            $('#name').val(response.data[0].name);
            $('#name+label').addClass('active');
            // kraftstoff
            $('input:radio[name=kraftstoff]').each(function () {
                if ($(this).val() == response.data[0].kraftstoff) {
                    $(this).prop("checked", true);
                }
            });
            // farbe
            $('#farbe').val(response.data[0].farbe);
            // bauart
            $('option').each(function () {
                if ($(this).val() == response.data[0].bauart) {
                    $(this).prop("selected", true);
                    $('select').formSelect();
                }
            });
            // tank
            $('#tank').val(response.data[0].tanken);
            $('#tank+label').addClass('active');

            // datepicker
            let elem = $('.datepicker');
            let datum = response.data[0].datum;
            let dateparts = datum.split('/');

            var date = new Date(Number(dateparts[2]), Number(dateparts[1]) - 1, Number(dateparts[0]));
            var instances = M.Datepicker.init(elem, {
                defaultDate: date,
                setDefaultDate: true,
                format: 'dd/mm/yyyy'
            });
        }
    });
 }