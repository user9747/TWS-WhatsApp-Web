    // link.type = 'image/x-icon';
    // link.rel = 'shortcut icon';
    // link.href = null;

// select the target node
var target = document.querySelector('title');
var link = document.querySelector("link[rel='shortcut icon']") || document.createElement('link');
// create an observer instance
var observer = new MutationObserver(function(mutations) {
    // We need only first event and only new value of the title
    console.log("yes3");
    console.log(mutations[0].target.nodeValue);
    mutations[0].target.textContent="WhatsApp";
    
});

var linkObserver = new MutationObserver(function(mutations) {
    //mutation removes unread chats number from title. totally uneccessary
    console.log("yes 4");
    console.log(mutations[0].target.href);
    if(mutations[0].target.href!="https://web.whatsapp.com/favicon.ico"){
        // mutations[0].target.href = null;
        console.log("hell");
         mutations[0].target.href='favicon.ico';
        // self loop gaaawd
    }
    ;
    
});



// configuration of the observer:
var config = { subtree: true, characterData: true, childList:true };

// pass in the target node, as well as the observer options
observer.observe(target, config);
linkObserver.observe(link,{attributes: true,childList:true});

    // alert("Hello from your Chrome extension!");
// document.body.style.border = "5px solid red";
// (function() {
//     setTimeout(function(){
    
//     // document.getElementsByTagName('head')[0].appendChild(link);
//     document.title = "WhatsApp";
//     console.log("yes");
//     },7000);
// })();


(function(){
    setTimeout(function(){
        var bubbles = document.querySelectorAll(".OUeyt");
        var i;
        for (i = 0; i < bubbles.length; i++) {
            bubbles[i].style.backgroundColor = "#bebebe";
        }
        // cosnole.log("yes2");
    },10000);
})();
(function(){
    setTimeout(function(){
        var dialogue = document.querySelectorAll(".iHhHL");
        var i;
        for (i = 0; i < dialogue.length; i++) {
            dialogue[i].innerHTML = "To disconnect is to live ";
        }
        console.log("yes2");
    },5000);
})();
(function(){
    setTimeout(function(){
        var dialogue = document.querySelectorAll("._1lrYJ");
        var i;
        for (i = 0; i < dialogue.length; i++) {
            dialogue[i].innerHTML = "WhatsApp is addictive. <a href=\"https://humanetech.com/problem/\" target=\"_blank\">Learn more here</a>.";
        }
        console.log("yes2");
    },10000);
})();


