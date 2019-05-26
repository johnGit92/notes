import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: NoteService) { }

  ngOnInit() { }

  onClick() {
    //tramite il service comunico l'evento aggiornando il valore della property associata
    this.service.showNoteInput('create');
  }

}
