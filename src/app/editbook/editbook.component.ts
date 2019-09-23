import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { ActivatedRoute,Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  title;bk;genre;author; price; description;bookTitle; m;book;
 b; 
  constructor(private ls:LibraryService,private ar:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.title=this.ar.snapshot.paramMap.get("title");
    this.ls.edit(this.title).subscribe(data=>{
      this.bk=data;
      //console.log(this.bk[0].bookTitle)
    }) 
  }

  public update(){
   // console.log(this.bk);
    console.log(this.bk[0].bookTitle);
    this.book={bookTitle:this.bk[0].bookTitle,author:this.bk[0].author,genre:this.bk[0].genre,description:this.bk[0].description,price:this.bk[0].price};
    this.ls.bookupdate(this.book).subscribe(data=>{
       this.m=data;
       console.log(this.m)
    })
    this.route.navigateByUrl("/books")
  }

}
