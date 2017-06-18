import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseService} from '../firebase.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems: FirebaseListObservable<any[]>;

  constructor(public fs: FirebaseService) {
    this.navItems = this.fs.getNavigation();
    console.log(this.navItems);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html'
})
export class MobileNavComponent implements OnInit {
  navItems: FirebaseListObservable<any[]>;

  constructor(public fs: FirebaseService) {
    this.navItems = this.fs.getNavigation();
    console.log(this.navItems);
  }

  ngOnInit() {
  }

}
