// alert("connected");

//check off specific todos by clicking
$("li").click(function() {
    //if li is grey
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        //turn it grey
        $(this).css({
            color: "grey",
            textDecoration: "line-through"
        });
    }
});