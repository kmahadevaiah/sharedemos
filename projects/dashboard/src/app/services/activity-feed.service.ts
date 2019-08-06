import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityFeedService {

  constructor(private httpService: HttpClient) { }

  getActivityData() {
   // return this.httpService.get('../../assets/activity_feed.json');
   return this.httpService.get('../../assets/activity_feed.json');
  }
}
