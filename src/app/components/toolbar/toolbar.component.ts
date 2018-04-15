import { VideoDialogComponent } from './../video-dialog/video-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
details = [
  {
    icon: 'phonelink',
    title: 'Corso',
    category: 'Online'
  },
  {
    icon: 'business',
    title: 'Categoria',
    category: 'Cucina e Ristorazione'
  }, {
    icon: 'business',
    title: 'Argomenti',
    category: 'Cucina, Chef, Corso online cucina,  Corso on demand cucina, Corso cuoco professionista, Ristorazione'
  },
  {
    icon: 'business',
    title: 'Destinatari',
    category: 'Aspiranti chef, Aspiranti imprenditori della ristorazione,' +
    'Proprietari di locali, Ristoratori, Albergatori, Imprenditori del food & beverage,' +
    ' Professionisti e manager della ristorazione, Cuoco professionista'
  }
];

detailsTwo = [
  {
    title: 'Argomenti',
    category: 'Cucina, Chef, Corso online cucina, Corso on demand cucina, Corso cuoco professionista, Ristorazione'
  },
  {
    title: 'Destinatari',
    category: 'Aspiranti chef, Aspiranti imprenditori della ristorazione,' +
    'Proprietari di locali, Ristoratori, Albergatori, Imprenditori del food & beverage,' +
    ' Professionisti e manager della ristorazione, Cuoco professionista'
  }
];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  openDialog() {

    const dialog = this.dialog.open( VideoDialogComponent, {
      height: '520px',
      width: '720px',
      hasBackdrop: true
    });

  }



}
