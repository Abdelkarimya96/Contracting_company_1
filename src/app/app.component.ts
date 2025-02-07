import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'contracting-company';


  ngOnInit() {
    AOS.init({
      duration: 1500,
      once: false,
      delay: 0,
      easing: 'ease-in-out',
      offset: 0,
      anchorPlacement: 'top-bottom'
    });
  }

  // Refresh AOS - for dynamic content
  refreshAOS() {
    AOS.refresh();
  }
}


