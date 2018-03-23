$(document).ready(function(){


alert("c");
$("#form").validate({
   rules: {
     field1: "required"
     pattern: /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
   },
   messages: {
     field1: "Enter the Password"

   }
})


$('#btn').on('click', function() {
    $("#pass").validate();
});