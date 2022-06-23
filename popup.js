// popup.js
/* global chrome */

function toggled () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    const activeTab = tabs[0]
    chrome.tabs.sendMessage(activeTab.id, { message: 'toggled' })
    console.log('message sent!')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('togglemech').addEventListener('click', toggled)
})
