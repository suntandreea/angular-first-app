import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
  projectForm: FormGroup;
  forbiddenNames = ['test'];
  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.validateName.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical')
    });
  }

  validateName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.includes(control.value)){
      return {'forbiddenName' : true};
    }
    else
      return null;
  }

  validateName2(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise (resolve => {
      setTimeout(() => {
        if (this.forbiddenNames.includes(control.value)){
          resolve({'forbiddenName' : true}) ;
        }
        else
          resolve(null);
      }, 1500)
    });
    return promise;
  }

  onSave() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }
}
