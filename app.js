$(document).on('click', '#submit', function(){
swal('Hi Friend!.Nice Name');
})
$(document).ready(function() {
    $('#bgForm').submit(function(event){
        event.preventDefault();
        var color = $('#bgColor').val();
        $('body').css('background-color', color);
      });
    $("#show").click(function(event) {
        event.preventDefault ();
        $("#hidden").toggle();
    });

    $("#remove").submit(function(event){
        event.preventDefault();
        $("#remove").remove();
    })

});


