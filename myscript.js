
$(document).ready(function(){
    $("#btn1").click(function(){
        $('#thisP').append("<br>Your alarm is set for " + $('#theHours').val() + " Hours " + $('#theMinutes').val() +  " Minutes " + $('#theSeconds').val() + " Seconds! ");

	
    });

});