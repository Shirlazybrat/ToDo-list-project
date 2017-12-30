// alert("connected");

//check off specific todos by clicking
///use on("click") on the ul tag, because it exists when the page loads.
// this will allow all the li elements of that ul have the functionality
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event) {
    //parent will give us the parent element as a jQuery element
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //the stopPropagation method of the Event object will stop the event from bubbeling up
    event.stopPropagation();
});

//input text will be added to the list
$("input[type='text'").keypress(function(event) {
    // console.log("event heard");
    // check for the enter key press
    if (event.which === 13) {
        //grabbing new todo teext from input
        var todoText = $(this).val();
        //clear out the input by replacing val with empty string
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus-circle").click(function() {
    $("input[type='text']").fadeToggle();
});