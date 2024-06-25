var found = false
var interval = 1000;
var delay = 500;

setInterval(function() {
  var skb = document.querySelector(".ytp-skip-ad-button");
  var pva = document.querySelector(".ytp-preview-ad");

  if (! found && (skb || pva)) {
    found = true
    setTimeout(function() {
      if (skb) {
        console.log("Found (Skip)");
        skb.click();
      } else if (pva) {
        console.log("Found (Preview)");
        document.querySelector("video").currentTime = document.querySelector("video").duration;
      }
      found = false
    }, delay)
  } else {
    console.log('Not Found');
  }
}, interval);
