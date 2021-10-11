// If this plugin is loaded, the icon of discord in the taskbar will always show 9 pending notifications.
setInterval(function () {
    // @ts-ignore
    setAppBadge(9);
}, 5000);
