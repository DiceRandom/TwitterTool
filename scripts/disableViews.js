
// disable rounded brands

var enabled = false;

console.log("Disable Views" + " is running...");
window.onload = function() {
    get(set);

    function get(_callback) {      
        chrome.storage.sync.get(["disableviews"], function(result) {
            enabled = result.disableviews;
            console.log("Disable Views" + " is " + enabled);
            _callback();
        });
        
    }

   

    function set(){
        if(enabled == true) {
            console.log("Disable Views"  + " is enabled");
        }
    }
}

window.addEventListener("scroll", (event) => {
        if(enabled){
            var apple = document.getElementsByTagName("a");
            for (let i = 0; i < apple.length; i++) {
                var label = apple[i].href;
                if(label != null){
                    if(endOfString(label, "/analytics")){
                        console.log("Found!");
                        // delete node / this is dumb
                        apple[i].parentNode.parentNode.removeChild(apple[i].parentElement);
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
});
