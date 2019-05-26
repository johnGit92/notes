import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  note: Note;

  @Input()
  index: number;

  constructor(private service: NoteService) { }

  ngOnInit() { }

  delete(id: number) {
    this.service.deleteNote(id, this.index);
  }

  editNote() {
    this.service.noteToUpdate(this.note);
    this.service.showNoteInput('edit'); // show create/edit section
  }

}
