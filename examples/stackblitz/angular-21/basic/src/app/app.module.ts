import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from '@stackline/angular-multiselect-dropdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AngularMultiSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
