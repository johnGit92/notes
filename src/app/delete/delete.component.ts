import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../note.service';
import { AuthorService } from '../author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  // array di note recuperate da backend "OnInit"
  notes: Note[];

  // nota utilizzata per il binding con il template
  note: Note = new Note();

  // istanza di autore utilizzata per il binding nel template
  author: Author = new Author();

  // property utillizzata per mostrare la sezione inserimento/modifica
  showEdit = false;

  /**
   * Component constructor.
   * @param service service injected for note related crud operations.
   */
  constructor(
    private service: NoteService,
    private authorService: AuthorService) { }

  ngOnInit() {

    // get all notes from backend
    this.service.getNotes().subscribe(
      (response: Note[]) => {
        this.notes = response;
        console.log(this.notes);
      }
    );

    // subscribe alla property utilizzata nel service per intercettare il click del bottone "create" dalla navbar
    this.service.valueChanged.subscribe((type) => {
      if ( type === 'create') { this.note = new Note(); this.author = new Author(); this.service.editClicked = false; }
      this.showEdit = true;
    });

    // subscribe alla property utilizzata nel service per notificare la richiesta post
    this.service.notePosted.subscribe(() => {
      this.service.getNotes().subscribe(
        (response: Note[]) => {
          this.notes = response;
          console.log(this.notes);
        });
      }
    );

    // subscribe alla property utilizzata nel service per notificare il click del bottone edit di una card
    this.service.noteUpdated.subscribe(
      (response: Note) => {
        this.note = response;

        // gestisce il caso in cui l'autore reperito dalla nota non è un oggetto ma solo un numero (id)
        if ( this.note.author.id === undefined ) {
                                          // conversione da oggetto a numero
          this.authorService.getAuthorById(this.note.author as any as number).subscribe(
            ( resp: Author) => { this.note.author = resp; this.author = response.author; }
          );
        } else { this.author = response.author; }
      }
    );

    // subscribe alla property utilizzata nel service per notificare il click del bottone delete di una card
    this.service.noteDeleted.subscribe(
      (index: number) => {
        this.notes.splice(index, 1);
      }
    );
  }

  save() {
    // edit click
    if (this.service.isEditClicked()) {
      this.service.editNote(this.note);
    } else { // create click
      this.authorService.getAuthorById(this.author.id).subscribe(
        (response) => {
          this.note.author = response;
          this.service.postNote(this.note);
        }
      );
    }
    this.close();
  }

  close() {
    this.showEdit = false;
  }

}
