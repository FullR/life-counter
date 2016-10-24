Magic the Gathering life counter app.

## Commands

All commands are run using `npm run` (or `yarn run`).

* `clean` - Deletes the previous build files
* `build` - Compiles and minifies the front-end code
* `build:dev` - Forces a build in development mode
* `build:android` - Build an unsigned android APK
* `build:desktop [platform=all] [arch=all]` - Build desktop executables (available platforms: all, win32, darwin, mas, linux)
* `run:android` - Build and run on android device or emulator
* `start` - Starts the servers (if `NODE_ENV === production`, API server only)
* `start:prod` - Forces the server to start in production mode
