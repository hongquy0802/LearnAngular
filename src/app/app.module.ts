import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArrowFunctionComponent } from './arrow-function/arrow-function.component';
import { RedBlackDirective } from './red-black.directive';

@NgModule({
  declarations: [AppComponent, ArrowFunctionComponent, RedBlackDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
