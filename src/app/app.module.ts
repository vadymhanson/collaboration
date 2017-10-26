import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { QuestionEditorComponent } from './backoffice/question-editor/question-editor.component';
import { QuestionListComponent } from './backoffice/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackofficeComponent,
    QuestionEditorComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
