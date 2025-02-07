import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'contracting-company';

  constructor(private route: ActivatedRoute, private router: Router) {}

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
        setTimeout(() => { // Delay to ensure DOM is ready
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.log('No fragment found:', fragment);
          }
        }, 100); // Small delay for stability
      }
    });
  }

  // Refresh AOS - for dynamic content
  refreshAOS() {
    AOS.refresh();
  }
}
