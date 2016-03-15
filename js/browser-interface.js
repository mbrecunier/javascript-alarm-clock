$(document).ready(function(){
  $('#currentTime').text(moment());

  $('#alarmForm').submit(function(event) {
    event.preventDefault();
    var alarmTime = $("#alarmTime").val();
    console.log(alarmTime);
  })
});
