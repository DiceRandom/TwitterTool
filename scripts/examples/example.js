// Example script to the scripts
// This example is used to show off how to use the scroll function

// This example is based off the disableTwitterBlue



var enabled = false;
var alwayTrue = false;

console.log("Example Script " + " is running...");
window.addEventListener("load", function (){
    get(set);

    function get(_callback) {
        if(alwayTrue != true){            
            chrome.storage.sync.get(["STORAGENAME"], function(result) {
                enabled = result.STORAGENAME;
                _callback();
            });
        }else{
            _callback();
        }
    }
    function set(){
        if(enabled == true) {
            const timer = setInterval(() => {
                // This is where you put your code
                // When looking for elements, use document.getElementsByTagName("");
            }, 150);
        }
    }
});

