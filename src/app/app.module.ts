import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {FirebaseService} from './firebase.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent, MobileNavComponent } from './nav/nav.component';
import { HomeHeadComponent } from './home-head/home-head.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'Oleg Portfolio' },
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    MobileNavComponent,
    HomeHeadComponent,
    ResumeComponent,
    PortfolioComponent,
    RecommendationsComponent,
    PostsComponent,
    ContactComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
