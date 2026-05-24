(function (global) {
  System.config({
    paths: {
      'npm:': 'https://cdn.jsdelivr.net/npm/'
    },
    map: {
      app: 'build-20260524-clearall/app',
      '@angular/core': 'https://cdn.jsdelivr.net/npm/@angular/core@4.4.7/bundles/core.umd.js',
      '@angular/common': 'https://cdn.jsdelivr.net/npm/@angular/common@4.4.7/bundles/common.umd.js',
      '@angular/compiler': 'https://cdn.jsdelivr.net/npm/@angular/compiler@4.4.7/bundles/compiler.umd.js',
      '@angular/forms': 'https://cdn.jsdelivr.net/npm/@angular/forms@4.4.7/bundles/forms.umd.js',
      '@angular/platform-browser': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser@4.4.7/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@4.4.7/bundles/platform-browser-dynamic.umd.js',
      '@stackline/angular-multiselect-dropdown': 'build-20260524-clearall/node_modules/@stackline/angular-multiselect-dropdown',
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
