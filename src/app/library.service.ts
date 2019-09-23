import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private hc:HttpClient) { }

  public checklog(logdet){
    let url="http://localhost:8000/login";
    return this.hc.post(url,logdet);
  }

  public register(det){
    let url="http://localhost:8000/register";
    return this.hc.post(url,det);
  }

  public books(){
    let url="http://localhost:8000/books";
    return this.hc.get(url);
  }
  public getbook(title){
    let url="http://localhost:8000/books/single/"+title;
    return this.hc.get(url);
  }

  public authors(){
    let url="http://localhost:8000/authors";
    return this.hc.get(url)
  }

  public getauthor(name){
    let url="http://localhost:8000/authors/"+name;
    return this.hc.get(url);
  }

  public addbook(name,author,genre,des,price,img){
    var bk={title:name,author:author,genre:genre,description:des,price:price,image:img};
    let url="http://localhost:8000/books/add";
    return this.hc.post(url,bk);
  }
  public pageupdate(){
    let url="http://localhost:8000/books/pageupdate";
    return this.hc.get(url);
  }

  public delete(title){
    let url="http://localhost:8000/books/delete/"+title;
    return this.hc.get(url);
  }

  public edit(bk){
    let url="http://localhost:8000/books/update/"+bk;
    return this.hc.get(url);
  }
  
  public bookupdate(book){
    let url="http://localhost:8000/books/edit";
    return this.hc.post(url,book);
  }
}
