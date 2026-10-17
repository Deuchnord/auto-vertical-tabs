# Auto Vertical Tabs

An add-on that switches automatically to vertical tabs when you have a lot of tabs.

## Installation

The extension is available on [Mozilla's add-ons store](https://addons.mozilla.org/en-US/firefox/addon/auto-vertical-tabs/).

If you prefer to install it manually, clone this repo and build it:

```bash
git clone https://github.com/Deuchnord/auto-vertical-tabs/
make xpi
```

Then go to `about:addons`, click on the small gear on top right and "Install Add-on From File", and choose the XPI file you have just made.

> [!note]
> Installing a non-signed add-on is not possible on the stable version of Firefox.
> If you really want to do this, either install Firefox Developer Edition or sign the add-on by yourself.

### Permissions

When installing this extension, the following permissions will be required:

- **Read and modify browser settings:** this is needed to switch between horizontal and vertical tabs
- **Storage:** used to store the plugin configuration

## Configuration

To configure the add-on, go to `about:addons`, click Auto Vertical Tabs, Preferences tab.
Right now, there is only one setting available:

- **Switch to vertical tabs when number of tabs exceeds:** when you have more than this number of tabs, vertical tabs will be enabled.

## What about Chromium-based browsers?

I don't use them, so I don't have any plan for them.
Feel free to contribute if you want this to happen!
