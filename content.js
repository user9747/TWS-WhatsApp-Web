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
    var landingDiv = document.querySelector("div[class='_2MnNk'");
    if(landingDiv!=null){
        console.log("NOT NULL!");
        console.log(landingDiv.innerHTML);
        landingDiv.childNodes[0].innerHTML = "To disconnect is to live ";
        landingDiv.childNodes[1].innerHTML="WhatsApp is addictive. <a href=\"https://humanetech.com/problem/\" target=\"_blank\">Learn more here</a>."
    }
    observer.disconnect()
    
});

var linkObserver = new MutationObserver(function(mutations) {
    //mutation removes unread chats number from title. totally uneccessary
    console.log("yes 4");
    console.log(mutations[0].target.href);
    if(mutations[0].target.href!="favicon.ico"){
        // mutations[0].target.href = null;
        console.log("hell");
         mutations[0].target.href='favicon.ico';
         console.log(mutations[0].target.href);
         console.log('hello')
        // self loop gaaawd
    };
    linkObserver.disconnect();
    
    
});






// configuration of the observer:
var config = {characterData: true, childList:true };

//-----OPTION 1-----//(feels better performnce on this one)


// test = function(){
// setTimeout(function(){
//     observer.observe(target, config);
//     link.href='favicon.ico';
//     linkObserver.observe(link,config);
//     console.log("yes2");
//     test();
// },2000);
// }
// test();


//------OPTION 2------//


setInterval(function(){ 
    observer.observe(target, config);
    link.href='favicon.ico';
    linkObserver.observe(link,config);
    console.log("yes2");
 },2000);

