// content.js
/* global chrome */

let toggle = false // fix bug where toggle doesn't reset
let selectedTextArray
let isSelected = false

chrome.runtime.onMessage.addListener(gotToggleMessage)

// DOES NOT WORK PROPERLY
// if (toggle === true) {
//   window.onkeydown = function (e) {
//     return !(e.keyCode === 32)
//   }
// }

document.addEventListener('click', selectText)
console.log('clicked')

async function selectText (e) {
  if (toggle === true) {
    if (e.target.tagName === 'P') {
      getText(e.target.textContent.split(''))
        .then(function (result) {
          selectedTextArray = result
          console.log(selectedTextArray)
        })
    }
    await processTextArray(selectedTextArray)
    console.log('selected ' + isSelected)
    return false
  }
}

async function processTextArray (array) {
  if (array !== undefined) {
    for (const char of array) {
      console.log(array)
      const keyPressed = await getKeyPressed()
      console.log('char: ' + char)
      if (keyPressed === char) {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
    }
    return false
  }
}

function getKeyPressed () {
  return new Promise((resolve) => {
    document.addEventListener('keydown', function (e) {
      resolve(e.key)
    })
  })
}

function getText (text) {
  return new Promise((resolve) => {
    resolve(text)
  })
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
