//Proceed to the next section
$(".button1").click(function() {
    $(".title").hide();
    $(".Cave1").hide();
    $(".button1").hide();
    $(".message-1").show();
    $(".Cave2").show();
    $(".button2").show();
});
//Exit, and achieve the first ending
$(".ExitButton").click(function() {
    $(".button2").hide();
    $(".Cave2").hide();
    $(".message-1").text("You fled like a coward.");
    $(".button0").show();
});
//Reset.
$(".start-button").click(function() {
    $(".title").show();
    $(".Cave1").show();
    $(".button1").show();
    $(".message-1").hide();
    $(".Cave2").hide();
    $(".button2").hide();
    $(".button0").hide();
    $(".message-3").hide();
    $(".message-4").hide();
    $(".dragon1").hide();
});

$(".ProceedButton1").click(function() {
    $(".Cave2").hide();
    $(".message-1").hide();
    $(".button0").hide();
    $(".Cave3").show();
    $(".message-2").show();
    $(".button3").hide();
    $(".Button1").hide();
    $(".button2").hide();
});

$(".Cave3").mouseenter(function() {
    $(".Cave3").fadeOut();
    $(".message-2").hide();
    $(".message-3").show();
    $(".Cave4").show();
    $(".button4").show();
});

$(".FleeButton").dblclick(function() {
    $(".button4").hide();
    $(".Cave4").hide();
    $(".message-3").text("You fled like a coward.");
    $(".button0").show();
});

$(".ProceedButton3").dblclick(function() {
    $(".Cave4").hide();
    $(".dragon").slideDown();
    $(".button4").hide();
    $(".message-3").text("You catch sight of a dragon walking towards you");
    $(".button5").show();
});

$(".UseSword").click(function() {
    $(".message-3").text("You charge at the beast with your sword!");
    $(".message-4").show();
    $(".dragon").hide();
    $(".dragon1").show();
    $(".button5").hide();
    $(".button0").show();
});

$(".UseShield").click(function() {
    $(".message-3").text("The beast breathes fire at you!");
    $(".message-4").show();
    $(".message-4").text("You block it with your shield.");
    $(".dragon").hide();
    $(".dragon1").show();
    $(".UseShield").hide();
    $(".UseSword").hide();
    $(".UseSword2").show();
});

$(".UseSword2").click(function() {
    $(".dragon1").hide();
    $(".dragon2").hide();
    $(".dragon3").show();
    $(".message-3").text("You've Slain the Dragon!");
    $(".message-4").text("Congratulations!");
    $(".UseSword2").hide();
});

$(".dragon3").mouseenter(function() {
    $(".message-4").hide();
    $(".message-3").hide();
    $(".dragon3").hide();
    $(".treasure").show();
    $(".Continue").hide();
});