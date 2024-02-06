var interval = 1000;

setInterval(function() {
  var skb = document.querySelector(".ytp-ad-skip-button-modern");
  var pvb = document.querySelector(".ytp-ad-preview-text-modern");

  if (skb) {
    console.log("Found (Skip)");
    skb.click();
    console.log("Click Skip");
  } else if (pvb) {
    console.log("Found (Preview)");
    document.querySelector("video").currentTime = document.querySelector("video").duration;
    console.log("End Video");
  } else {
    console.log('Not Found');
  }
}, interval);
