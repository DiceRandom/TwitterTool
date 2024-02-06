
// disable twitter premium button


var enabled = false;

console.log("Disable Twitter Premium is running...");
window.onload = function() {

    get(set);

    function get(_callback) {
        chrome.storage.sync.get(['twitterpremiumButton'], function(result) {
            enabled = result.twitterpremiumButton;
            if(result.twitterpremiumButton == undefined){
                enabled = true;
                chrome.storage.sync.set({'twitterpremiumButton': true}, function() {
                    console.log("Disable Twitter Premium is set to " + enabled);
                });
            }else{
                console.log("Disable Twitter Premium is " + enabled);
            }
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
                        if(as[i].ariaLabel == "Premium"){
                            as[i].style.display = 'none';
                        }
                    }
                }
            }, 150);
        }
    }
}
