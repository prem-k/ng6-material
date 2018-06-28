// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
  	apiKey: "AIzaSyC9wIaBsAXncx8c-MVCmOOMbt4mr3uCYS0",
    authDomain: "fir-demo-16bc5.firebaseapp.com",
    databaseURL: "https://fir-demo-16bc5.firebaseio.com",
    projectId: "fir-demo-16bc5",
    storageBucket: "fir-demo-16bc5.appspot.com",
    messagingSenderId: "619124090817"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
