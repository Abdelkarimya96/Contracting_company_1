import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.css'
})
export class ScrollUpButtonComponent {
  isVisible = false;
  scrollProgress = 0;
  faCircleArrowUp = faCircleArrowUp;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    this.scrollProgress = (scrollTop / scrollHeight) * 100;
    this.isVisible = scrollTop > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
