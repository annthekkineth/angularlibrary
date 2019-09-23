import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bk;

  constructor(private ls:LibraryService) { }

  ngOnInit() {
    this.ls.books().subscribe(data=>{
      this.bk=data;
      console.log(this.bk);
    })
  }

}
