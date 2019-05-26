import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './note.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DeleteComponent } from './delete/delete.component';
import { ItemComponent } from './delete/item/item.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeleteComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoteService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
