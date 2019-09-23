import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-managebooks',
  templateUrl: './managebooks.component.html',
  styleUrls: ['./managebooks.component.css']
})
export class ManagebooksComponent implements OnInit {
  bk;
  
  constructor( private ls:LibraryService, private route:Router) { }

  ngOnInit() {
    this.ls.pageupdate().subscribe(data=>{
      this.bk=data;
      
    })
  } 

  public delete(title){
    this.ls.delete(title).subscribe();
    this.route.navigateByUrl("/managebooks");
  }

}
