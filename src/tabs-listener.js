const VERTICAL_TABS_SETTING = browser.browserSettings.verticalTabs;
const BROWSER_TABS = browser.tabs;

function getMaxTabsBeforeVertical() {
}

function onTabCountChanged() {
    Promise.all([
        browser.storage.sync.get("minNbTabs"),
        BROWSER_TABS.query({}),
    ]).then(function (values) {
        ({ settings, tabs } = { settings: values[0], tabs: values[1] });
        const minNbTabs = settings.minNbTabs || 5;

        //console.log(minNbTabs, tabs)
        VERTICAL_TABS_SETTING.set({ value: tabs.length > minNbTabs })
    });
}

for (let event of [BROWSER_TABS.onCreated, BROWSER_TABS.onAttached, BROWSER_TABS.onDetached, BROWSER_TABS.onRemoved]) {
    event.addListener(onTabCountChanged);
}

browser.storage.onChanged.addListener(onTabCountChanged);

// trigger at extension load:
onTabCountChanged();
