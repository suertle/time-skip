var found = false
var interval = 500;
var delay = 5000;

setInterval(function() {
  var skb = document.querySelector(".ytp-skip-ad-button");
  var pva = document.querySelector("[id^='ad-preview']");

  if (! found && pva) {
    found = true
    setTimeout(function() {
      if (pva) {
        console.log("Found (Preview)");
        document.querySelector("video").currentTime = document.querySelector("video").duration;
      }
      found = false
    }, delay)
  } else {
    console.log('Not Found');
  }
}, interval);
