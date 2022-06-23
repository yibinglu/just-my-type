// content.js
/* global chrome */

let toggle = false

console.log('content.js running!')

chrome.runtime.addListener(gotMessage)

function gotMessage (request, sender, sendResponse) {
  console.log('message received')
  if (request.message === 'toggle') {
    toggle = !toggle
  }
}

// change text to grey if extension turned on
const paragraphs = document.getElementsByTagName('p')
for (let i = 0; i < paragraphs.length; i++) {
  const originalColor = paragraphs[i].style.color
  if (toggle === true) {
    paragraphs[i].style.color = '#B3B3B3'
  } else {
    paragraphs[i].style.color = originalColor
  }
}

const lists = document.getElementsByTagName('li')
for (let i = 0; i < lists.length; i++) {
  const originalColor = lists[i].style.color
  if (toggle === true) {
    lists[i].style.color = '#B3B3B3'
  } else {
    lists[i].style.color = originalColor
  }
}
