import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes} from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { LibraryService } from './library.service';
import { HttpClientModule } from "@angular/common/http";
import { FileSelectDirective} from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ManagebooksComponent } from './managebooks/managebooks.component';
import { HomeComponent } from './home/home.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { EditbookComponent } from './editbook/editbook.component';

const approutes:Routes=[{path:"",component:LoginComponent},
{path:"books",component:BooksComponent},
{path:"authors",component:AuthorsComponent},
{path:"addbooks",component:AddbooksComponent},
{path:"managebooks",component:ManagebooksComponent},
{path:"singlebook/:title",component:SinglebookComponent},
{path:"singleauthor/:name",component:SingleauthorComponent},
{path:"editbook/:title",component:EditbookComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    AddbooksComponent,
    ManagebooksComponent,
    HomeComponent,
    SinglebookComponent,
    SingleauthorComponent,
    FileSelectDirective,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
