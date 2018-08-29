// alert("Hello from your Chrome extension!");
// document.body.style.border = "5px solid red";
(function() {
    setTimeout(function(){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.stackoverflow.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
    document.title = "WhatsApp";
    console.log("yes");
    },7000);
})();

(function(){
    setTimeout(function(){
        var bubbles = document.querySelectorAll(".OUeyt");
        var i;
        for (i = 0; i < bubbles.length; i++) {
            bubbles[i].style.backgroundColor = "#bebebe";
        }
        cosnole.log("yes2");
    },5000);
})();
(function(){
    setTimeout(function(){
        var profiles = document.querySelectorAll(".dIyEr");
        var i;
        for (i = 0; i < profiles.length; i++) {
            profiles[i].style.visibility = "hidden";
        }
        console.log("yes2");
    },5000);
})();