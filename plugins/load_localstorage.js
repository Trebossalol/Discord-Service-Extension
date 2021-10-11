var transformLocalstorage = function () {
    var iframe = document.createElement('iframe');
    document.head.append(iframe);
    var pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
    iframe.remove();
    return pd;
};
Object.defineProperty(window, 'localStorage', transformLocalstorage());
// Now the localstorage is accessible via window.localstorage
