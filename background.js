

chrome.action.onClicked.addListener(
    function() {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
          } else {
            window.open(chrome.runtime.getURL('index.html'));
          }
    }
)


navigator.serviceWorker.register('background.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
         }, function(err) {
    console.log('ServiceWorker registration failed: ', err);

});
