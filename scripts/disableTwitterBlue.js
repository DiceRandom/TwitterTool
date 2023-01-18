// /i/twitter_blue_sign_up
// disable twitter blue button


var enabled = false;

console.log("Disable Twitter Blue is running...");
window.onload = function() {

    get(set);

    function get(_callback) {
        chrome.storage.sync.get(['twitterblueButton'], function(result) {
            enabled = result.twitterblueButton;
            _callback();
        });
    }

    function set(){
        if(enabled == true) {
            const timer = setInterval(() => {
                var as = document.getElementsByTagName("a")

                if(as.length == 0){
                    console.log("No a tags found!");
                }

                if(as.length > 2){
                    clearTimeout(timer);
                    for (var i = 0; i < as.length; i++) {
                        if(as[i].href == "https://twitter.com/i/twitter_blue_sign_up"){
                            as[i].style.display = 'none';
                        }
                    }
                }
            }, 150);
        }
    }
}
