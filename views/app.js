const textArea = document.getElementById("text-box");
let timeout;

textArea.addEventListener("keydown",(e) => {
    $("#status").fadeIn();
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        $("#status").fadeOut();
//        console.log("you've stoped typing!")
    }, 1000)
})