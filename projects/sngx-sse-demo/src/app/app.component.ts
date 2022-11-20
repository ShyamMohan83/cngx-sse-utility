import { Component, OnInit } from '@angular/core';
import {SseUtilityService} from 'cngx-sse-utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private sseUtilityService: SseUtilityService){
    this.sseUtilityService.startProcess('http://localhost:8000');
  }
  ngOnInit(): void {
    this.sseUtilityService.getEventSubscription().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
