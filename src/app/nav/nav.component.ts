import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html'
})
export class MobileNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
