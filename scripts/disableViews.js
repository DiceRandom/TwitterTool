
// disable rounded brands

var enabled = false;
var alwayTrue = false;

console.log("Disable Views" + " is running...");
window.addEventListener("load", function (){
    get(set);

    function get(_callback) {
        if(alwayTrue != true){            
            chrome.storage.sync.get(["disableviews"], function(result) {
                enabled = result.disableviews;
                _callback();
            });
        }else{
            _callback();
        }
    }

   

    function set(){
        if(enabled == true) {
            const timer = setInterval(() => {
                var apple = document.getElementsByTagName("a");
            }, 150);
        }
    }
});

window.onscroll = function() {
    get(set);
    function get(_callback) {
        if(alwayTrue != true){            
            chrome.storage.sync.get(["disableviews"], function(result) {
                enabled = result.disableviews;
                _callback();
            });
        }else{
            _callback();
        }
    }



    function set(){
        if(enabled){
            var apple = document.getElementsByTagName("a");
            for (let i = 0; i < apple.length; i++) {
                var label = apple[i].ariaLabel;
                if(label != null){
                    if(endOfString(label, "View Tweet analytics")){
                        apple[i].style.display = 'none';
                    }
                }
            }
            
            
            function endOfString(importStr,endStr){
                // import = hello how are you
                // endStr = you
                // output = true
            
                var endStrLength = endStr.length;                                                        // count the length of the endStr
                var importStrLength = importStr.length;                                                  // count the length of the importStr
                var lastXChars = importStr.substring(importStrLength - endStrLength, importStrLength);   // get the last x characters of the importStr
                // compare the last x characters of the importStr to the endStr
                if(lastXChars == endStr){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
}
