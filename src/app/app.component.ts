import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('f') formData: NgForm;
  subscriptions = ['basic', 'advanced', 'pro'];
  default = "basic";

  onSubmit() {
    console.log(this.formData.value);
    this.formData.reset();
  };
}
