import {AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) { }

  getPersonalInfo() {
    return this.afd.list('/personal/');
  }

  /*addNewEventItem(event){
    return this.afd.list('/events/').push(event);
  }
  removeEventItem(eventId){
    return this.afd.list('/events/').remove(eventId);
  }

  getArticleItems(){
    return this.afd.list('/articles/');
  }
  addNewArticleItem(article){
    return this.afd.list('/events/' + article.eventId).push(article);
  }
  removePostItem(articleId){
    return this.afd.list('/articles/').remove(articleId);
  }*/
}
