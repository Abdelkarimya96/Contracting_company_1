import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderService } from './Services/loader.service';
import { filter } from 'rxjs/operators';
import AOS from 'aos';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'contracting-company';

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(()=>{
          this.loaderService.hide();
        }, 100)
      }
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 1500,
      once: false,
      delay: 0,
      easing: 'ease-in-out',
      offset: 0,
      anchorPlacement: 'top-bottom'
    });

    // Listen for navigation completion
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToFragment();
      });
  }

  ngAfterViewInit() {
    this.scrollToFragment();
  }

  private scrollToFragment() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.log('No fragment found:', fragment);
          }
        }, 100);
      }
    });
  }

  refreshAOS() {
    AOS.refresh();
  }
}


