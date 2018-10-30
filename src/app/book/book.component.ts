import { PopupComponent } from './../popup/popup.component';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '../../../node_modules/@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  booksList: Array<Book>;
  form: FormGroup;

  constructor(private service: BookService, private fb: FormBuilder) {
    this.booksList = new Array<Book>();
      this.form = fb.group({
        bookTitle: new FormControl('', Validators.required, this.existingTitle),
        authorName: ['', Validators.required],
        publishedDate: ['', Validators.required]
      });
  }

  get bookTitle() { return this.form.get('bookTitle'); }
  get authorName() { return this.form.get('authorName'); }
  get publishedDate() { return this.form.get('publishedDate'); }

  existingTitle(control: FormControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        if (control.value === 'ss') {
          resolve({ existingTitle: true });
        } else { resolve(null); }
    });
     // this.tempList.forEach(item => {
    // });
  }

  ngOnInit() {
    this.service.getBooks()
      .subscribe(response => {
        this.booksList = response.json();
      });
  }

  addBook(book) {
    this.service.postBook(book)
      .subscribe(response => {
        book.id = response.json().id;
        const index = this.booksList.length;
        book.id = index + 1;
        this.booksList.splice(0, 0, book);
      });
      this.booksList.splice(0, 0, book);
      this.form.reset();
      PopupComponent.closeModal();
  }

  deleteBook(book) {
    this.service.deleteBook(book.id)
      .subscribe(response => {
        let index = this.booksList.indexOf(book);
        this.booksList.splice(index, 1);
      });
      PopupComponent.closeModal();
  }

  updateBook(updatedBook, book) {
    updatedBook.id = book.id;
    this.service.updatePost(updatedBook)
    .subscribe(response => {
       console.log(response.json());
      let index = this.booksList.indexOf(book);
      this.booksList[index] = updatedBook;
    });
    // this.form.reset();
    PopupComponent.closeModal();
  }
}
