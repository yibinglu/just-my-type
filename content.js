// content.js
/* global chrome */

console.log('content.js running!')

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage (request, sender, sendResponse) {
  const toggle = request.message
  greyText(toggle)
}

function greyText (toggle) {
  // change text to grey if extension turned on
  const paragraphs = document.getElementsByTagName('p')
  for (let i = 0; i < paragraphs.length; i++) {
    // const originalColor = paragraphs[i].style.color
    if (toggle) {
      paragraphs[i].style.color = '#B3B3B3'
      console.log('grey')
    } else {
      paragraphs[i].style.color = '#000000'
    }
  }

  const lists = document.getElementsByTagName('li')
  for (let i = 0; i < lists.length; i++) {
    // const originalColor = lists[i].style.color
    if (toggle) {
      lists[i].style.color = '#B3B3B3'
      console.log('grey')
    } else {
      lists[i].style.color = '#000000'
    }
  }
}
