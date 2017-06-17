import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  personalInfo: FirebaseListObservable<any[]>;

  constructor(public fs: FirebaseService) {
    this.personalInfo = this.fs.getPersonalInfo();
    console.log(this.personalInfo);
  }


  ngOnInit() {
  }

}
