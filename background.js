// background.js
console.log('background.js running!')

chrome.action.onClicked.addListener(iconClicked)

function iconClicked (tab) {
  const msg = {
    txt: 'icon clicked'
  }
  chrome.tabs.sendMessage(tab.id, msg)
}
