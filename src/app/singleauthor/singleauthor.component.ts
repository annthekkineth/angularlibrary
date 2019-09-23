import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { ActivatedRoute } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {
author;
result;
  constructor(private ls:LibraryService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.author=this.ar.snapshot.paramMap.get("name");
    this.ls.getauthor(this.author).subscribe(data=>{
        this.result=data;
        console.log(this.result);
    })
  }

}
