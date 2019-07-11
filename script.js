$(document).ready(function () {
    // load Beverages in the dropdown thorugh external source
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/15ha9v',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false,
        dataType: 'json',
        timeout: (20000),
        cache: false,
        crossOrigin: true,
        success: function (data) {
            $.each(data, function (i, item) {
                $.each(item.Beverages, function (i, result) {
                    $('#beverageList').append($('<option>', {
                        value: result.Name,
                        text: result.Name
                    }));
                });
            });
        },
        error: function () {
            alert('Beverage list not loaded.')
        }
    })
    // on submit order
    $('#orderSubmit').on('click', function () {
        var username = $('#username').val();
        var beverage = $('#beverageList :selected').text();
        var orderDetails = '<ul id="orderInfo"><li>' + username + '</li><li>' + beverage + '</li> </ul>';
        if(username.length > 1) {
            $('#queue').append(orderDetails);
            $('#username').val('');
        } else {
            alert('Fields should n\'t be empty');
        }
    });
    // order placed and in queue
    $('#queue').on('click', 'ul', function () {
        var queueOrder = $(this).clone();
        $(this).remove();
        queueOrder.appendTo($('#processing'));
    });
    // order processed and ready to collect
    $('#processing').on('click', 'ul', function () {
        var processingOrder = $(this).clone();
        $(this).remove();
        processingOrder.appendTo($('#ready'));
    });
})
