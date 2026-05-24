(function (global) {
  System.config({
    paths: {
      'npm:': 'https://cdn.jsdelivr.net/npm/'
    },
    map: {
      app: 'build-20260524-clearall/app',
      '@angular/core': 'https://cdn.jsdelivr.net/npm/@angular/core@12.2.17/bundles/core.umd.js',
      '@angular/common': 'https://cdn.jsdelivr.net/npm/@angular/common@12.2.17/bundles/common.umd.js',
      '@angular/compiler': 'https://cdn.jsdelivr.net/npm/@angular/compiler@12.2.17/bundles/compiler.umd.js',
      '@angular/forms': 'https://cdn.jsdelivr.net/npm/@angular/forms@12.2.17/bundles/forms.umd.js',
      '@angular/platform-browser': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser@12.2.17/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@12.2.17/bundles/platform-browser-dynamic.umd.js',
      '@stackline/angular-multiselect-dropdown': 'build-20260524-clearall/node_modules/@stackline/angular-multiselect-dropdown',
      tslib: 'https://cdn.jsdelivr.net/npm/tslib@1.14.1/tslib.js',
      rxjs: 'https://cdn.jsdelivr.net/npm/rxjs@6.6.7',
      'rxjs/operators': 'https://cdn.jsdelivr.net/npm/rxjs@6.6.7/operators'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      '@stackline/angular-multiselect-dropdown': {
        defaultExtension: 'js'
      },
      rxjs: {
        main: './index.js',
        defaultExtension: 'js'
      },
      'rxjs/operators': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
