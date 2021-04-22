import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrowFunctionComponent } from './arrow-function/arrow-function.component';
import { RedBlackDirective } from './red-black.directive';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignupReactiveFormComponent } from './signup-page/signup-reactive-form/signup-reactive-form.component';

@NgModule({
  declarations: [AppComponent, ArrowFunctionComponent, SignupPageComponent, RedBlackDirective, SignupReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
