document.addEventListener('DOMContentLoaded', function () {
    const minNbTabs = document.getElementById('minNbTabs');

    browser.storage.sync.get('minNbTabs').then(function (settings) {
        minNbTabs.value = settings.minNbTabs || 5;
    });

    document.getElementById('save-settings').addEventListener('click', function () {
        browser.storage.sync.set({ minNbTabs: minNbTabs.value });
    })
});
