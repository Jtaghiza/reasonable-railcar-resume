// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyASC0JCEWuHL0mOMUBlIr_ht03jt19XlPg',
    authDomain: 'reasonable-railcar-resume.firebaseapp.com',
    databaseURL: 'https://reasonable-railcar-resume.firebaseio.com',
    projectId: 'reasonable-railcar-resume',
    storageBucket: 'reasonable-railcar-resume.appspot.com',
    messagingSenderId: '67730325081'
  }
};
