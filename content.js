// content.js
/* global chrome */

console.log('content.js running!')

chrome.runtime.onMessage.addListener(gotToggleMessage)
function gotToggleMessage (request, sender, sendResponse) {
  // receive message from popup that toggle has been switched
  const toggle = request.message
  greyText(toggle)
}

// get mouse click coordinates
document.onclick = function (e) {
  const x = e.pageX
  const y = e.pageY
  console.log(x, y)
}

// detect which element clicked on
window.onclick = e => {
  console.log(e.target)
}

function greyText (toggle) {
  // change text to grey if extension turned on
  const paragraphs = document.getElementsByTagName('p')
  for (let i = 0; i < paragraphs.length; i++) {
    // const originalColor = paragraphs[i].style.color
    if (toggle) {
      paragraphs[i].style.color = '#B3B3B3'
    } else {
      paragraphs[i].style.color = '#000000'
    }
  }

  const lists = document.getElementsByTagName('li')
  for (let i = 0; i < lists.length; i++) {
    // const originalColor = lists[i].style.color
    if (toggle) {
      lists[i].style.color = '#B3B3B3'
    } else {
      lists[i].style.color = '#000000'
    }
  }
}
