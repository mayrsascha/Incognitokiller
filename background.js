const killAllIncognitoTabs = () => {
  chrome.tabs.query({}, (tabs) => {
    const incognitoTabs = tabs
      .filter(tab => tab.incognito)
      .map(tab => tab.id);
    if (incognitoTabs.length > 0) {
      chrome.tabs.remove(incognitoTabs);
    }
  });
};

chrome.idle.onStateChanged.addListener((idleState) => {
  if (idleState === 'locked') {
    killAllIncognitoTabs();
  }
})
