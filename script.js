$(document).ready(function() {
    
    // 1. data has to fetch from https://github.com/uidreams/makeOrderApp/blob/master/beverageData.json
    // 2. on form submit show order details to 'ordered' queue   
    $('#orderSubmit').click(function() {
        var username = $('#username').val();
        var beverage = $('#beverageList :selected').text();
        var orderDetails = '<ul><li>' + username + '</li><li>' + beverage + '</li> </ul>';
        $('#queue').append(orderDetails);
    });     
    // 3. after 30 sec. show order details to 'processing' queue
    // 4. after 30 sec. show order details to 'Ready to collect' queue

    // write settimeout function for automatic status update after specified time.
    
    //Instead, give an option to move to another queue on clicking move icon of order
    
    // for(let i = 0; i < $('#queue ul').length; i++) {
    //     this.attr('id', $('#queue') + i);
    // }
    if($('#queue ul').length > 1) {
        $('#queue ul li').click(function() {
            alert('hii');
        });
    }


})