$(document).ready(function(){
  var currentTime = moment().format('HH:mm');
  var alarmTime;
  function update() {
    $('#currentTime').text(moment().format('HH:mm:ss'));
    currentTime = moment().format('HH:mm');
    if(alarmTime === currentTime) {
      console.log("PARTY TIIIIIIIIIME");
      $('#ptext').append("<p>PARTY TIIIIIIIIIME</p>");
      $('#ppic').append("<img src='img/wk.jpg'>");

    } else {
      console.log("Not yet ppppppartytime");
      console.log(currentTime);
    }
  }
  setInterval(update, 1000);

  $('#alarmForm').submit(function(event) {
    event.preventDefault();
    alarmTime = $("#alarmTime").val();
    console.log(alarmTime);
  });

});
