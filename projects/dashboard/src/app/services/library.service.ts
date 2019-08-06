import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get('../assets/library_settings.json');
  }
}
