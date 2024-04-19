var interval = 1000;

setInterval(function() {
  var skbm = document.querySelector(".ytp-ad-skip-button-modern");
  var skb = document.querySelector(".ytp-skip-ad-button");
  var pvtm = document.querySelector(".ytp-ad-preview-text-modern");
  var pva = document.querySelector(".ytp-preview-ad");

  if (skbm) {
    console.log("Found (Skip Modern)");
    skbm.click();
    console.log("Click Skip Modern");
  } else if (skb) {
      console.log("Found (Skip)");
      skb.click();
      console.log("Click Skip");
  } else if (pvtm || pva) {
    console.log("Found (Preview)");
    document.querySelector("video").currentTime = document.querySelector("video").duration;
    console.log("End Video");
  } else {
    console.log('Not Found');
  }
}, interval);
