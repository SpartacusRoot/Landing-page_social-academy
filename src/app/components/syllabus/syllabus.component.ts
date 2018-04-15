import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  panelOpenState = true;
  constructor() { }
  step = 0;

  syllabusList = [
   {
     title: '16 volumi su scienza dell alimentazione, realizzazioni culinarie, preparazioni e cottura ed enogastronomia'
   },
     {
 title: '7 DVD',
     },
     {
       title: '3 libri di cucina regionale'
     },
     {
 title: 'Una innovativa piattaforma e-learning con tutor'
     },
     {
       title: 'Sessioni pratiche dedicate'
     }
  ];

  syllabusList2 = [
    {
      title: 'prepararti alla certificazione HACCP'
    },
    {
      title: 'trovare uno stage in ristorante/azienda ricettiva'
    }
  ];

  setStep(index: number) {
    this.step = index;
  }
  ngOnInit() {
  }

}
