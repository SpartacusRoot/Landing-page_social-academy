import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
cardList = [
  {
    image: '../../../assets/Toque Blanche - Origine del Tipico Capello da Cuoco_okmod.jpg',
    name: 'Silvia Duranti',
    proof: 'Grazie al corso Chechef ho avuto la possibilità di mettermi in gioco e finalmente trasformare la mia passione' +
     'in un lavoro, ecc'
  }, {
    image: '../../../assets/17-01-23-corso-cuoco-xl.jpg',
    name: 'Cosimo Filiberti',
    proof: 'Grazie al corso Chechef ho avuto la possibilità di mettermi in gioco e finalmente trasformare la mia passione' +
    'in un lavoro, ecc'
  }, {
    image: '../..//../assets/17-01-23-corso-cuoco.jpg',
    name: 'Luana Paganini',
    proof: 'Grazie al corso Chechef ho avuto la possibilità di mettermi in gioco e finalmente trasformare la mia passione' +
    'in un lavoro, ecc'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
