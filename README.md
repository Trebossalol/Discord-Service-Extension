# Discord-Service-Extension

## Usage
The following command will add the notification.js plugin into your discord
`app.exe --targets=./plugins/notification.js@appBadge --build --load`

## Flags
`--tos-read`      If not specified, the application will throw a warning, if you use this flag you agree to the terms of service below

`--app-version`   Specifies the Discord App version, currently it's `1.0.9003` (default value), specify it if discord gets updates.

`--targets`       Specifies the paths to plugins, these can be relative or absolute paths to a file with file-endings (eg. `plugins/notification.js`).
                  Each target can have a location, which is specified with an at (`@`) after the filepath, followed by the location-name (eg. `plugin/notification.js@appBadge`).
                  
                  
`--core`          The location of the Discord Core file, by default this is 
                  `%LOCALAPPDATA%/Discord/app-%APP-VERSION%/modules/discord_desktop_core-1/discord_desktop_core/core.asar`, specify this if you want to inject into
                  a different core, or if you Discord installation is not on `C:/`.
                  
`--build`         If this option is specified, the app will build your files (This will NOT inject any code into discord)

`--load`          This option loads your data into your Discord application

`--unload`        This option will unload all loaded plugins


## Terms of Service
Please read the License [here](https://github.com/Trebossalol/Discord-Service-Extension/blob/main/LICENSE)
