import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCS_META } from './docs-meta';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly docsMeta = DOCS_META;
  readonly installCode = `npm install @stackline/angular-multiselect-dropdown@${this.docsMeta.packageRange}`;
  readonly setupCode = [
    `import { FormsModule } from '@angular/forms';`,
    `import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';`,
    ``,
    `"styles": [`,
    `  "node_modules/@stackline/angular-multiselect-dropdown/themes/default.theme.css"`,
    `]`,
    ``,
    `@NgModule({`,
    `  imports: [BrowserModule, FormsModule, AngularMultiSelectModule]`,
    `})`,
    `export class AppModule {}`
  ].join('\n');
  readonly customThemeCode = [
    `"styles": [`,
    `  "src/styles.scss",`,
    `  "src/styles/multiselect-dropdown.theme.scss"`,
    `]`,
    ``,
    `/* Start from the package file: */`,
    `/* node_modules/@stackline/angular-multiselect-dropdown/themes/custom.theme.scss */`
  ].join('\n');
  readonly templateCode = [
    `<angular-multiselect`,
    `  [data]="items"`,
    `  [(ngModel)]="selectedItems"`,
    `  [settings]="settings"`,
    `  (onSelect)="onItemSelect($event)">`,
    `</angular-multiselect>`
  ].join('\n');
  readonly featurePills = [
    'ngModel',
    'Reactive forms',
    'Search',
    'Grouping',
    'Custom templates',
    'Lazy loading',
    'Material-like theme',
    'ADA-compliant keyboard/ARIA',
    'Dialog overflow overlay',
    'Custom CSS/SCSS theme'
  ];
  readonly apiCards = [
    {
      kicker: 'Selector',
      title: '<angular-multiselect>',
      copy: 'The public selector stays unchanged so existing templates do not need to be rewritten for this line.'
    },
    {
      kicker: 'Binding',
      title: '[(ngModel)] and formControlName',
      copy: 'Template-driven and reactive forms remain first-class. This line focuses on compatibility, not API churn.'
    },
    {
      kicker: 'Events',
      title: 'onSelect, onDeSelect, onSelectAll',
      copy: 'The classic callback outputs are preserved, so event handling code keeps working while the UI gets refined.'
    },
    {
      kicker: 'Accessibility',
      title: 'ADA-compliant keyboard and ARIA support',
      copy: 'The trigger, clear-all action, chips, listbox, and lazy-loaded results expose keyboard flow, visible focus, and ARIA labels for accessible use.'
    },
    {
      kicker: 'Dialogs',
      title: 'tagToBody for clipped containers',
      copy: 'Set tagToBody to true inside Angular Material dialogs, modals, drawers, and overflow containers. In 21.1.2 the open panel is moved to document.body, aligned to the trigger, and cleaned up on close.'
    },
    {
      kicker: 'Styling',
      title: 'custom.theme.scss and custom.theme.css',
      copy: 'A full starter theme now ships with the package so teams can copy it and completely restyle the dropdown without editing library source.'
    }
  ];
  readonly copyLabels: { [key: string]: string } = {
    install: 'Copy',
    setup: 'Copy',
    customTheme: 'Copy',
    template: 'Copy'
  };

  links = this.router.config.filter((link) => !!link.path && !!link.data?.['label']);
  currentLabel = this.links[0]?.data?.['label'] || 'Basic example';
  currentPath = this.links[0]?.path || 'basic';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.syncCurrentRoute());
  }

  ngOnInit() {
    this.syncCurrentRoute();
  }

  copySnippet(key: string, value: string) {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      this.copyLabels[key] = 'Copied';
    } catch (error) {
      this.copyLabels[key] = 'Copy failed';
    } finally {
      document.body.removeChild(textarea);
      window.setTimeout(() => {
        this.copyLabels[key] = 'Copy';
      }, 1600);
    }
  }

  private syncCurrentRoute() {
    let route = this.activatedRoute.firstChild;

    while (route?.firstChild) {
      route = route.firstChild;
    }

    this.currentLabel = route?.snapshot.data?.['label'] || 'Basic example';
    this.currentPath = route?.routeConfig?.path || 'basic';
  }
}
