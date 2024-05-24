let buttonColours=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern = [];

$(".btn").click(function() {
    let userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
});

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // flash animation //
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    // audio //
    $("#"+randomChosenColour).on("click",function(){
        let audio=new Audio("sounds/"+randomChosenColour+".mp3");
        audio.play();
    });
};

nextSequence();