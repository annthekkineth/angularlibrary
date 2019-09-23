import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  title;
  res;
  constructor(private ar:ActivatedRoute, private ls:LibraryService) { }
 
  ngOnInit() {
    this.title=this.ar.snapshot.paramMap.get("title");
    //console.log(this.title);
    this.ls.getbook(this.title).subscribe(data=>{
      this.res=data;
      //console.log(this.r.author);
    })
  }

}
