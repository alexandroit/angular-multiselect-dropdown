(function (global) {
  System.config({
    paths: {
      'npm:': 'https://cdn.jsdelivr.net/npm/'
    },
    map: {
      app: 'build-20260524-angular5-npm/app',
      '@angular/core': 'https://cdn.jsdelivr.net/npm/@angular/core@5.2.11/bundles/core.umd.js',
      '@angular/common': 'https://cdn.jsdelivr.net/npm/@angular/common@5.2.11/bundles/common.umd.js',
      '@angular/compiler': 'https://cdn.jsdelivr.net/npm/@angular/compiler@5.2.11/bundles/compiler.umd.js',
      '@angular/forms': 'https://cdn.jsdelivr.net/npm/@angular/forms@5.2.11/bundles/forms.umd.js',
      '@angular/platform-browser': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser@5.2.11/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@5.2.11/bundles/platform-browser-dynamic.umd.js',
      '@stackline/angular-multiselect-dropdown': 'build-20260524-angular5-npm/node_modules/@stackline/angular-multiselect-dropdown',
      rxjs: 'https://cdn.jsdelivr.net/npm/rxjs@5.5.12'
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
        defaultExtension: 'js'
      }
    }
  });
})(this);
