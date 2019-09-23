import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../library.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FileSelectDirective,FileUploader } from 'ng2-file-upload';

const url="http://localhost:8000/books/add";

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  title; author; price; description; genre; file; filee;  m;

  constructor(private ls:LibraryService,private route:Router,private ar:ActivatedRoute) { }

  public uploader: FileUploader = new FileUploader({ url: url, itemAlias: 'file1' });

 

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    }
  }

  public newbook(){
   this.filee=this.file.slice(12);
   console.log(this.filee);
    this.ls.addbook(this.title,this.author,this.genre,this.description,this.price,this.filee).subscribe();
    this.route.navigateByUrl("/books");
  }
  
}
