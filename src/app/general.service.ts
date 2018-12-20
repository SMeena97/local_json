import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  httpClient: any;
  getContentJSON() {
    return this.httpClient.get('assets/json/general.json')
    
  }
  }
  
