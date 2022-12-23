import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { ShopDialogComponent } from './shop-dialog/shop-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDialogComponent,
    ShopDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
