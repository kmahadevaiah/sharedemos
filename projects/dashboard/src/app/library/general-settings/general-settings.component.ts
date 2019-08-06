import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LibraryService } from '../../services/library.service';
import { GeneralFormData } from '../general-form-data';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})

export class GeneralSettingsComponent implements OnInit {
  constructor(private jsonFile: LibraryService) {}
  public imagePath: any;
  files: File;
  faviconFiles: File;
  jsonData;
  formData: GeneralFormData;
  settingFormData = false;
  registrationForm;

  ngOnInit() {
    this.jsonFile.getData().subscribe(res => {
      this.jsonData = res;
      this.formData = this.jsonData.form;
      this.registrationForm = new FormGroup({
        title: new FormControl(this.formData.name),
        homepageTitle: new FormControl(this.formData.title),
        desc: new FormControl(this.formData.description),
        url: new FormControl(this.formData.domain),
        logo: new FormControl(),
        favicon: new FormControl()
    });
      this.settingFormData = !this.settingFormData;
  });
  }

  onLogoUpload(event) {
    this.files = event.target.files[0];

    if (this.files === null) {
      return;
    }

    const mimeType = this.files.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = this.files;
    reader.readAsDataURL(this.files);
    reader.onload = event => {
      this.formData.logo = reader.result;
    };
  }

  onFaviconUpload(event) {
    this.faviconFiles = event.target.files[0];

    if (this.faviconFiles === null) {
      return;
    }

    const mimeType = this.faviconFiles.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = this.faviconFiles;
    reader.readAsDataURL(this.faviconFiles);
    reader.onload = event => {
      this.formData.favicon = reader.result;
    };
  }

}
