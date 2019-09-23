import { Component, OnInit } from '@angular/core';
import { LibraryService} from '../library.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
auth;
  constructor(private ls:LibraryService) { }

  ngOnInit() {
    this.ls.authors().subscribe(data=>{
      this.auth=data;
    })
  }

}
