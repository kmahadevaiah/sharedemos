import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public tanantApps;
  public tenantAppArray = [];
  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.libraryService.getData().subscribe(data => {
      this.tanantApps = data;
      this.tenantAppArray = this.tanantApps.tenant_aps;
    });
  }
}
