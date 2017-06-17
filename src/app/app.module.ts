import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

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

const firebase = {
    apiKey: "AIzaSyDNzYMbUdRigHY0QUp3o5SmFdBjOK2crfY",
    authDomain: "oleg-personal-portfolio.firebaseapp.com",
    databaseURL: "https://oleg-personal-portfolio.firebaseio.com",
    projectId: "oleg-personal-portfolio",
    storageBucket: "",
    messagingSenderId: "420176339684"
};


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
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
