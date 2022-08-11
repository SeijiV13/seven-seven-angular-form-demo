import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AntiHero } from '../antihero';
import { checkHasNumberValidator } from '../validators/custom.validator';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit, AfterViewInit {
  antiHeroForm: FormGroup;
  powerFormArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.antiHeroForm = this.fb.group({
      // {required: true}
      firstName: [{value: '', disabled: false}, [Validators.required, checkHasNumberValidator]],
      lastName: ['', [Validators.required, Validators.email]],
      knownAs: ['', [Validators.maxLength(5), Validators.minLength(1)]],
      // otherName: ['']
      address: this.fb.group({
        city: [''],
        street: [''],
        country: [''],
      }),
      powers: this.fb.array([
      ])
    });
    this.powerFormArray = this.antiHeroForm.get('powers') as FormArray
   }

  ngOnInit(): void {
    // before rendering html
    // this.antiHeroForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })
    (this.antiHeroForm.get('firstName') as FormControl).errors
    this.firstName.setValue('Tony');
  }

  // getters
  get firstName() {
    return this.antiHeroForm.get('firstName') as FormControl;
  }

  ngAfterViewInit(): void {
     // after rendering html

    
  }

  
  addPower() {
    this.powerFormArray.push(new FormControl(''));
    // (this.antiHeroForm.get('powers') as FormArray).push(new FormControl(''))

  }

  deletePower(i: number) {
    this.powerFormArray.removeAt(i);
  }

  submit() {
    console.log(this.firstName.errors)
    console.log(this.antiHeroForm.errors)
    const antiHero = this.antiHeroForm.getRawValue() as AntiHero;
    console.log(antiHero);
  }

  manualChangeState() {
    this.antiHeroForm.get('knownAs')?.markAsTouched();
  }

  clear() {
    // whole form
    this.antiHeroForm.reset();
    // single control
    (this.antiHeroForm.get('lastName') as FormControl).reset();
    this.otherFunc();
  }

  otherFunc() {
    this.antiHeroForm.get('firstName')?.disable();
    this.antiHeroForm.addControl('otherName', new FormControl(''))
  }
 

}
