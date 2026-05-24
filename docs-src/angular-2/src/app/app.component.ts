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
  readonly installCode =
    `npm install @stackline/angular-multiselect-dropdown@${this.docsMeta.packageRange}`;
  readonly setupCode = [
    `import { FormsModule } from '@angular/forms';`,
    `import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';`,
    ``,
    `@NgModule({`,
    `  imports: [BrowserModule, FormsModule, AngularMultiSelectModule]`,
    `})`,
    `export class AppModule {}`
  ].join('\n');
  readonly templateCode = [
    `<angular-multiselect`,
    `  [data]="items"`,
    `  [(ngModel)]="selectedItems"`,
    `  [settings]="settings">`,
    `</angular-multiselect>`
  ].join('\n');

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

  private syncCurrentRoute() {
    let route = this.activatedRoute.firstChild;

    while (route?.firstChild) {
      route = route.firstChild;
    }

    this.currentLabel = route?.snapshot.data?.['label'] || 'Basic example';
    this.currentPath = route?.routeConfig?.path || 'basic';
  }
}
