import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-data-blinding',
  templateUrl: './simple-data-blinding.component.html',
  styleUrls: ['./simple-data-blinding.component.css']
})
export class SimpleDataBlindingComponent {

username = "";

  onResetUsername() {
    this.username = "";
  }
}
