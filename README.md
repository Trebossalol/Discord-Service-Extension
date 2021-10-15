# Discord-Service-Extension

## Usage
The following command will add the notification.js plugin into your discord
`app.exe --targets=./plugins/notification.js@appBadge --build --load`

## Flags
`--app-version`   Specifies the Discord App version, currently it's `1.0.9003` (default value), specify it if discord gets updates.

`--targets`       Specifies the paths to plugins, these must me relative or absolute filepaths with file-endings (eg. `my-plugin.js`).
                  It can include a location, where it should be injected, currently there are only 2 options available (`mainScreen`, `appBadge`, 
                  while mainScreen beeing the default value), if you want to inject multiply files, seperate them by a comma (Notice: Each 
                  location can only be injected once!).
                  
`--core`          The location of the Discord Core file, by default this is 
                  `%LOCALAPPDATA%/Discord/app-%APP-VERSION%/modules/discord_desktop_core-1/discord_desktop_core/core.asar`, specify this if you want to inject into
                  a different core, or if you Discord installation is not on `C:/`.
                  
`--build`         If this option is specified, the app will build your data

`--load`          This option loads your data into your Discord application

`--unload`        This option will unload all loaded plugins


## Terms of Service
I would like to note, that this third party app is against the Discord ToS, usage on your own.
Every changes made to the application, or written in the plugins are your property.
                  
