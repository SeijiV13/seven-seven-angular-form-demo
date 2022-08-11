import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialPipe } from './exponential.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    // COMPONENTS, DIRECTIVES AND PIPES
    AppComponent,
    ExponentialPipe,
    PipeDemoComponent,
    TemplateFormDemoComponent,
    ReactiveFormDemoComponent,
    BookItemComponent,
    BookListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
