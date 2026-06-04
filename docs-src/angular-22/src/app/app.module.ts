import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { MockService } from './examples/mock-data';
import { BasicExample } from './examples/basic';
import { SingleSelectionExample } from './examples/singleselection';
import { GroupByExample } from './examples/groupBy';
import { SearchFilterExample } from './examples/searchFilter';
import { TemplatingExample } from './examples/templating';
import { ResetDropdownExample } from './examples/resetdropdown';
import { DisableModeExample } from './examples/disablemode';
import { LimitSelectionExample } from './examples/limitselection';
import { LimitBadgesExample } from './examples/limitbadges';
import { CustomPlaceholderExample } from './examples/customplaceholder';
import { StylingExample } from './examples/styling';
import { ng2Gist } from './examples/gist';
import { UsingWithFormExample } from './examples/usingWithForms';
import { UsingWithReactiveFormExample } from './examples/usingInReactForms';
import { LazyLoadingExample } from './examples/lazyLoading';
import { MultipleDropdownsExample } from './examples/multipleDropdowns';
import { DynamicDataSetsExample } from './examples/dynamicDataSets';
import { ThemingExample } from './examples/theming';
import { RemoteDataExample } from './examples/remoteData';
import { CustomSearchExample } from './examples/customSearch';
import { SearchFilterByOnePropertyExample } from './examples/searchByOneProperty';
import { LazyLoadingRemoteDataExample } from './examples/lazyLoadingRemoteData';
import { SearchFilterAddItemExample } from './examples/searchFilterAddNewItem';
import { EventsExample } from './examples/events';
import { UsingInListExample } from './examples/usingInList';
import { DialogContentExampleDialog, UsingWithinDialog } from './examples/usingWithinDialog';
import { KeyboardContractExample } from './examples/keyboardContract';
import { AriaStateExample } from './examples/ariaState';
import { TemplateSlotsExample } from './examples/templateSlots';
import { HeadlessAriaExample } from './examples/headlessAria';

@NgModule({
  declarations: [
    AppComponent,
    ng2Gist,
    BasicExample,
    SingleSelectionExample,
    GroupByExample,
    SearchFilterExample,
    TemplatingExample,
    ResetDropdownExample,
    DisableModeExample,
    LimitSelectionExample,
    LimitBadgesExample,
    CustomPlaceholderExample,
    StylingExample,
    UsingWithFormExample,
    UsingWithReactiveFormExample,
    LazyLoadingExample,
    MultipleDropdownsExample,
    DynamicDataSetsExample,
    ThemingExample,
    RemoteDataExample,
    CustomSearchExample,
    SearchFilterByOnePropertyExample,
    LazyLoadingRemoteDataExample,
    SearchFilterAddItemExample,
    EventsExample,
    UsingInListExample,
    UsingWithinDialog,
    DialogContentExampleDialog,
    KeyboardContractExample,
    AriaStateExample,
    TemplateSlotsExample,
    HeadlessAriaExample
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    AppRouterModule
  ],
  providers: [
    MockService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
