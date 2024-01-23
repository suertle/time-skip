setInterval(function() {
  var skb = document.querySelector(".ytp-ad-skip-button-modern");
  if (skb) {
    console.log("Found");
    skb.click();
    console.log("Click");
  } else {
    console.log('Not Found')
  }
}, 5000);