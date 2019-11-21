let executed = false

chrome.browserAction.onClicked.addListener(() => {
  const command = executed ?
  `
    video.requestPictureInPicture();
  `
  : `
    let video = document.querySelector('video');

    if (video) {
      video.requestPictureInPicture();
    } else {
      alert('No video detected')
    }
  `

  chrome.tabs.executeScript({ code: command })

  executed = true
});

chrome.tabs.onUpdated.addListener(() => {
  executed = false
})