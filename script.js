$(document).ready(function() {
    
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/15ha9v',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false,
        dataType: 'json',
        timeout: (20000),
        cache: false,
        crossOrigin: true,
        success: function(data) {
            
            $('#beverageList').empty().append($('<option>', {
                value: 'NONE',
                text : 'Please Select'
            }));
            $.each(data, function (val) {
                $('#beverageList').append($('<option>', {
                    value: val.Description,
                    text: val.Description,
                }));
            });
        },
        error: function() {
            alert('Beverage list not loaded.')
        }
    })
    // 2. based on user(admin / user) profile selected, give right to change status

    $('#orderSubmit').on('click', function() {
        var username = $('#username').val();
        var beverage = $('#beverageList :selected').text();
        var orderDetails = '<ul id="orderInfo"><li>' + username + '</li><li>' + beverage + '</li> </ul>';
        $('#queue').append(orderDetails);
    });
    // on clicking 
    $('#queue').on('click', 'ul', function() {
        var queueOrder = $(this).clone();
        $(this).remove();
        queueOrder.appendTo($('#processing'));
    });
    $('#processing').on('click', 'ul', function() {
        var processingOrder = $(this).clone();
        $(this).remove();
        processingOrder.appendTo($('#ready'));
    });


})