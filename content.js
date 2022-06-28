// content.js
/* global chrome */

let toggle = false // fix bug where toggle doesn't reset
let selectedTextArray

chrome.runtime.onMessage.addListener(gotToggleMessage)

// CALLBACK VER.
// getText(function (result) {
//   selectedTextArray = result
//   console.log(selectedTextArray)
// })

// function getText (callback) {
//   document.addEventListener('click', (e) => {
//     if (e.target.tagName === 'P' && toggle === true) {
//       callback(e.target.textContent.split(''))
//     }
//   })
// }

// PROMISE VER.
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'P' & toggle === true) {
    getText(e.target.textContent.split(''))
      .then(function (result) {
        selectedTextArray = result
      })
  }
  console.log(selectedTextArray)
  processTextArray(selectedTextArray)
})

async function processTextArray (array) {
  if (array !== undefined) {
    for (const char of array) {
      const keyPressed = await getKeyPressed()
      console.log('keyPressed: ' + keyPressed)
      console.log('char: ' + char)
      if (keyPressed === char) {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
    }
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
