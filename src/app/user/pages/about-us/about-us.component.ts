import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../Services/info.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  generalInfo: any = {};

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.generalInfo = this.infoService.getInfo().general_info;
  }
}
