import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = signal(false);

  show() {
    this.isLoading.set(true);
  }

  hide() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
