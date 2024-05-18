const $Date = $('.date');

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 

// make single object
var newDate = new Date();
// make current time
newDate.setDate(newDate.getDate());
// setting date and time
var month = new Date().getMonth()+1;
$('#Date').html((month < 10 ? "0" : "" ) + month + '/' + newDate.getDate() + "" );
$Date.html((month < 10 ? "0" : "" ) + month + '/' + newDate.getDate() + "" );

setInterval( function() {
// Create a newDate() object and extract the seconds of the current time on the visitor's
var seconds = new Date().getSeconds();
// Add a leading zero to seconds value
$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
},1000);

setInterval( function() {
// Create a newDate() object and extract the minutes of the current time on the visitor's
var minutes = new Date().getMinutes();
// Add a leading zero to the minutes value
$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
},1000);

setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    // Add a leading zero to the hours value
    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
}, 1000); 


$('#lock').click(function(){
    $('#locked').html('結束時間：');
    $('#unlockedDay').toggle(1);
    $('#place').html('任務模式')
  });