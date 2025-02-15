import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // ✅ Fixed `styleUrls`
})
export class LandingComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
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
}
