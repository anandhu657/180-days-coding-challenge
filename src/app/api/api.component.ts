import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})

export class ApiComponent {
  constructor(private getApi: ApicallService) { }

  postArray: any = [];
  ngOnInit() {
    this.getApi.getPost().subscribe((res) => {
      this.postArray = res;
    })
  }
}
