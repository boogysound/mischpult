$(document).ready(function(){
  // calculate the days left
  var dateEnd = new Date(2015, 8, 20);
  var dateNow = new Date();
  var daysLeft = (dateEnd - dateNow)/1000/60/60/24;
  daysLeft = Math.round(daysLeft);
  // display the days left
  $("#daysLeft").html(daysLeft);

  //spenden barometer
  var amount = $("#spenden").html();
  amount = (amount/2000)*100;
  $("#barometer").width(amount + "%");
});
