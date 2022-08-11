import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-form-demo',
  templateUrl: './template-form-demo.component.html',
  styleUrls: ['./template-form-demo.component.scss']
})
export class TemplateFormDemoComponent {
  powers = ["Power 1", " Power 2", "Power 3"]
  // OBJECT
  model = new Hero(20 , 'Iron Man', this.powers[0], "Tony Stark");
  
  submitted = false;
  onSubmit() { 
    this.submitted = true;
    console.log(this.model);
  }

}
