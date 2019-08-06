import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityFeedRoutingModule } from './activity-feed-routing.module';
import { ActivityNavComponent } from './activity-nav/activity-nav.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ActivityNavComponent, ActivityFeedComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ActivityFeedRoutingModule
  ]
})
export class ActivityFeedModule { }
