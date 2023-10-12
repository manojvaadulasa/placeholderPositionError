import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placeholder';
  displaySearchTaskPopUp : boolean;
  constructor(){
    this.displaySearchTaskPopUp=false;
  }
  showSearchTaskPopUp() {
    this.displaySearchTaskPopUp = true;
  }
  hideSearchTaskPopUp(event:boolean) {
    this.displaySearchTaskPopUp = event;
  }
}
