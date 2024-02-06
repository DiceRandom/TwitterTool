
// disable rounded brands

var enabled = false;
var alwayTrue = true;

console.log("Disable Gold Checks" + " is running...");
window.addEventListener("load", function (){
    get(set);

    function get(_callback) {
        if(alwayTrue != true){            
            chrome.storage.sync.get(["disablegold"], function(result) {
                enabled = result.disablegold;
                _callback();
            });
        }else{
            _callback();
        }
    }

   

    function set(){
       if(enabled){
        console.log("Disable Gold Checks" + " is enabled");
       }
    }
});

window.onscroll = function() {
    get(set);
    function get(_callback) {
        if(alwayTrue != true){            
            chrome.storage.sync.get(["disablegold"], function(result) {
                enabled = result.disablegold;
                _callback();
            });
        }else{
            _callback();
        }
    }



    function set(){
        if(enabled){
            // path

            // svg
            // aria-label Verified account

            // child of child fill(#paint0_linear_8728_433881);
            
            var svgs = document.getElementsByTagName("svg");
            var checks = [];
            var blue = "rgb(29, 155, 240)"
            var d = "M 22.25 12 c 0 -1.43 -0.88 -2.67 -2.19 -3.34 c 0.46 -1.39 0.2 -2.9 -0.81 -3.91 s -2.52 -1.27 -3.91 -0.81 c -0.66 -1.31 -1.91 -2.19 -3.34 -2.19 s -2.67 0.88 -3.33 2.19 c -1.4 -0.46 -2.91 -0.2 -3.92 0.81 s -1.26 2.52 -0.8 3.91 c -1.31 0.67 -2.2 1.91 -2.2 3.34 s 0.89 2.67 2.2 3.34 c -0.46 1.39 -0.21 2.9 0.8 3.91 s 2.52 1.26 3.91 0.81 c 0.67 1.31 1.91 2.19 3.34 2.19 s 2.68 -0.88 3.34 -2.19 c 1.39 0.45 2.9 0.2 3.91 -0.81 s 1.27 -2.52 0.81 -3.91 c 1.31 -0.67 2.19 -1.91 2.19 -3.34 Z m -11.71 4.2 L 6.8 12.46 l 1.41 -1.42 l 2.26 2.26 l 4.8 -5.23 l 1.47 1.36 l -6.2 6.77 Z";


            for (let i = 0; i < svgs.length; i++) {
                if(svgs[i].ariaLabel != null){
                    var label = svgs[i].ariaLabel;
                    if(label != null){
                        if(label == "Verified account"){
                            checks.push(svgs[i]);
                        }
                    }
                }
            }

            for (let i = 0; i < checks.length; i++) {
                // check if gold
                if(checks[i].firstChild.childNodes[2] != null){
                    // go through all the children and set fill to red
                    var children = checks[i].firstChild.childNodes;
                    for (let j = 0; j < children.length; j++) {
                        if(children[j].getAttribute("fill") != null){
                            children[j].setAttribute("fill", blue);
                            children[j].setAttribute("d", d);
                            // console.log(children[j].getAttribute("d"));
                        }
                    }

                    //  remove all children except the first
                    var children = checks[i].firstChild.childNodes;
                    for (let j = 0; j < children.length; j++) {
                        if(j != 0){
                            checks[i].firstChild.removeChild(children[j]);
                        }
                    }
                }
            }
        }
    }
}
