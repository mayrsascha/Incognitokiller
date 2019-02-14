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
