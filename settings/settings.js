document.addEventListener('DOMContentLoaded', function () {
    // Internationalization:
    console.log(browser.i18n.getMessage('prefMinNbTabsLabel'))
    document.getElementById('label-minNbTabs').innerText = browser.i18n.getMessage('prefMinNbTabsLabel');
    document.getElementById('save-settings').innerText = browser.i18n.getMessage('prefApplyButton');

    const minNbTabs = document.getElementById('minNbTabs');

    browser.storage.sync.get('minNbTabs').then(function (settings) {
        minNbTabs.value = settings.minNbTabs || 5;
    });

    document.getElementById('save-settings').addEventListener('click', function () {
        browser.storage.sync.set({ minNbTabs: minNbTabs.value });
    });
});
