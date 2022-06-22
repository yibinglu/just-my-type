// content.js
/* global chrome */

let toggle = false

console.log('content.js running!')

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage (message, sender, sendResponse) {
  console.log(message.txt)
  toggle = !toggle
}

if (toggle === true) {
  const paragraphs = document.getElementsByTagName('p')
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = '#B3B3B3'
  }

  const lists = document.getElementsByTagName('li')
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.color = '#B3B3B3'
  }
}
