import { Component, OnInit } from '@angular/core';
import { ActivityFeedService } from '../../services/activity-feed.service';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {

  public status: boolean = false;
  public activityStatus: any = [];
  constructor(private activityFeedService: ActivityFeedService) { }

  ngOnInit() {
    this.activityFeedService.getActivityData()
    .subscribe(data => {
      //this.activityStatus = data;
      console.log(data);
    });
  }

  onClick() {
    this.status = !this.status;
  }

}
