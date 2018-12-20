import { Component, OnInit } from '@angular/core';
import { GeneralService} from './general.service';
import * as data_json from './assets/json/general.json';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  contentGeneral: any;
  generalService: any;
  
  

ngOnInit() {
this.getContentJSON();
}

  getContentJSON() {
    this.generalService.getContentJSON().subscribe(data => {
      this.contentGeneral = data;
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

}