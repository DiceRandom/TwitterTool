// disable rounded brands

var enabled = false;

console.log("Rounded Brands" + " is running...");
window.addEventListener("load", function (){
    get(set);

    function get(_callback) {
        chrome.storage.sync.get(["roundedBrands"], function(result) {
            enabled = result.roundedBrands;
            _callback();
        });
    }

   

    function set(){
        if(enabled == true) {
            const timer = setInterval(() => {
                console.log("Rounded Brands is enabled!");
                var divs = document.getElementsByTagName("div")

                   
            }, 150);
        }
    }
});

window.onscroll = function() {
    get(set);

    function get(_callback) {
        chrome.storage.sync.get(["roundedBrands"], function(result) {
            enabled = result.roundedBrands;
            _callback();
        });
    }

   

    function set(){
        if(enabled){
            var divs = document.getElementsByTagName("div")
            for (let i = 0; i < divs.length; i++) {
                if(divs[i].style.clipPath != null && divs[i].style.clipPath != ""){
                    console.log("Found!")
                    divs[i].children[0].style.borderRadius == '9000px'
                    for (const child of divs[i].children) {
                        child.style.borderRadius = '9000px';
                    }
                    var mommmy = divs[i].parentNode;
                    for (const child of mommmy.children) {
                        child.style.backgroundColor = 'transparent';
                    }
                }
            }
        }
    }
}

