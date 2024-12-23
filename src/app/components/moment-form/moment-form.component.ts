import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: false,

  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit {
  @Input() btn_text!: string;

  momentForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }
  get description(){
    return this.momentForm.get('description')!;
  }

  submit(){
    if (this.momentForm.invalid) {
      return;
    }
    console.log('Enviou o formulário');
  }

}
