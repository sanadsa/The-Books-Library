import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpModule } from '../../node_modules/@angular/http';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { PopupComponent } from './popup/popup.component';
import { NonEnglishPipe } from './non-english.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TabComponent,
    PopupComponent,
    NonEnglishPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [
    BookService,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
