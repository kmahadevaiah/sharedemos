import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advanced-settings',
  templateUrl: './advanced-settings.component.html',
  styleUrls: ['./advanced-settings.component.css']
})

export class AdvancedSettingsComponent implements OnInit {

  constructor(private jsonFile: LibraryService) { }

  jsonData;
  checklistData;
  public announcementWidget: boolean;
  public advanceFormData = false;

  toggleForm = new FormGroup({
    box_integration_enabled: new FormControl(),
    is_private: new FormControl(),
    allow_offline: new FormControl(),
    can_download: new FormControl(),
    can_embed: new FormControl(),
    chapter_autoflow: new FormControl(),
    show_notes: new FormControl(),
    announcementWidget: new FormControl()
  });

  ngOnInit() {
    this.jsonFile.getData().subscribe(res => {
      this.jsonData = res;
      this.checklistData = this.jsonData.tenant.flags;
      this.announcementWidget = this.jsonData.is_announcement_widget_enabled;
      this.advanceFormData = !this.advanceFormData;
    });
  }

}
