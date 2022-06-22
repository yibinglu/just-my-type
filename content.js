// content.js
console.log('content.js running!')

// const paragraphs = document.getElementsByTagName('p')
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = '#C6C6C6'
// }

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage (message, sender, sendResponse) {
  console.log(message.txt)
}
