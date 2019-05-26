import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './model/note';
import { Subject } from 'rxjs';
import { AuthorService } from './author.service';

@Injectable()
export class NoteService {
  private baseUrl = 'http://localhost:8080/note2api';

  // Subject permette di "osservare" i cambiamenti di un determinato valore, in questo caso la property createClicked
  valueChanged = new Subject();

  // track the click on the button edit of an item
  editClicked = false;

  // property used to notify post/update/delete events
  notePosted = new Subject();
  noteUpdated = new Subject();
  noteDeleted = new Subject();

  constructor(private http: HttpClient, private authorService: AuthorService) { }

  getNotes() {
    return this.http.get(this.baseUrl + '/notes');
  }

  postNote(note: Note) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    //const body = JSON.stringify(note); console.log(body);

    // esegue richiesta post
    this.http.post<Note>(this.baseUrl + '/notes', note, httpOptions).subscribe(() => {
      note = new Note();
      this.notePosted.next(); // notifica la richiesta post al component "in ascolto"
    });

    console.log('post request');
  }

  deleteNote(id: number, index: number) {
    this.http.delete(this.baseUrl + '/notes/' + id).subscribe(
      () => {
        this.noteDeleted.next(index);
      }
    );
  }

  editNote(note: Note) {
    this.http.put(this.baseUrl + '/notes/' + note.id, note).subscribe();
    this.editClicked = !this.editClicked;
  }

  showNoteInput(type: string) {
    // il metodo next comunica il nuovo valore ai subscribers in ascolto
    this.valueChanged.next(type);
  }

  noteToUpdate(note: Note) {
    this.editClicked = !this.editClicked;
    this.noteUpdated.next(note);
  }

  isEditClicked() {
    return this.editClicked;
  }

}
