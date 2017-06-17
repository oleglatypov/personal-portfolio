import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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
    RouterModule.forRoot(appRoutes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
