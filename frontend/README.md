# Electron-React-TypeScript-Webpack-Boilerplate
Pre-configured Electron.js + React.js + TypeScript boilerplate with 
Webpack v4 & linters config predefined.

This boilerplate currently works on macOS and Windows. If something doesn't 
work, please [file and issue](https://github.com/Devtography/electron-react-typescript-webpack-boilerplate/issues/new).

```sh
npm install
npm run dev
npm start
```

## Building the installer for your Electron app
The boilerplate is currently configured to package & build the installer of 
your app for macOS & Windows using `electron-builder`. 

For macOS, execute:
```sh
npm run build:mac
```

For Windows, execute:
```sh
npm run build:win
```