$(document).ready(
    function () {
        $('#button1').click(function () {
            event.preventDefault();
            show();
        });

        $('#button2').click(function () {
            location.reload();
        });

        $("input[name=ListItem]").keydown(function (event) {
            if (event.key !== undefined) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    show();
                }
            }
        });

        $(document).on('dblclick', 'li', function () {
            $(this).toggleClass('strike').fadeOut('slow');
        });

        $('input').focus(function () {
            $(this).val('');
        });

        $('ol').sortable();

        function show() {
            let toAdd = $('input[name=ListItem]').val();
            $('ol').append('<li>' + toAdd + '</li>');

            let obj = {
                name: toAdd
            }
            let json = JSON.stringify(obj);
            console.log(json);
            let jsonToObj = JSON.parse(json);

        }


    });