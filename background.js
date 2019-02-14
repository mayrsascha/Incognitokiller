const killAllIncognitoTabs = () => {
  chrome.tabs.query({}, (tabs) => {
    tabs
      .filter(tab => tab.incognito)
      .forEach(tab => chrome.tabs.remove(tab.id));
  });
};