// content.js
/* global chrome */

let toggle = false // fix bug where toggle doesn't reset
let selectedTextArray = []

chrome.runtime.onMessage.addListener(gotToggleMessage)

// get mouse click coordinates
// document.onclick = e => {
//   const x = e.pageX
//   const y = e.pageY
//   console.log(x, y)
// }

// detect which element clicked on
// window.onclick = e => {
//   if (e.target.tagName === 'P' && toggle === true) {
//     selectedTextArray = e.target.textContent.split('')
//   }
// }

document.addEventListener('click', getElement)

// function getElement (e) {
//   if (e.target.tagName === 'P' && toggle === true) {
//     selectedTextArray = e.target.textContent.split('')
//     console.log(selectedTextArray)
//   }
// }

function getElement (e) {
  if (e.target.tagName === 'P' && toggle === true) {
    selectedTextArray = e.target.textContent.split('')
    console.log(selectedTextArray)
  }
}

function gotToggleMessage (request, sender, sendResponse) {
  // receive message from popup that toggle has been switched
  toggle = request.message
  greyText(toggle)
}

function greyText (toggle) {
  // change text to grey if extension turned on
  const paragraphs = document.getElementsByTagName('p')
  for (let i = 0; i < paragraphs.length; i++) {
    if (toggle) {
      paragraphs[i].style.color = '#B3B3B3'
    } else {
      paragraphs[i].style.color = '#000000'
    }
  }
}
