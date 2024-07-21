function keepSiteActive(tabId) {
  // Inject a script into the tab to keep it active
  browser.tabs.executeScript(tabId, {
    code: `
      setInterval(() => {
        document.body.dispatchEvent(new Event('mousemove'));
      }, 1000); // Trigger a mousemove event every 1 second
    `
  });
}

browser.browserAction.onClicked.addListener((tab) => {
  keepSiteActive(tab.id);
});
