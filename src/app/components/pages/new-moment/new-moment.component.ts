import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  standalone: false,

  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
  btntext = 'Compartilhar!';
  constructor(){}

  ngOnInit(): void {
  }

}
