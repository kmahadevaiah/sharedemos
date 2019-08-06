import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityNavComponent } from './activity-nav/activity-nav.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'activity-feed',
    pathMatch: 'full'
  },
  { path: 'activity-nav', component: ActivityNavComponent },
  { path: 'activity-feed', component: ActivityFeedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityFeedRoutingModule { }
