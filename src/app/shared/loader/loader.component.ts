import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
constructor(
  public loaderService: LoaderService
){}
}





// export class LoaderComponent implements OnDestroy {
//   constructor(public loaderService: LoaderService) {
//     if (this.loaderService.isLoading()) {
//       document.body.classList.add('no-scroll');
//     }
//   }
//   ngOnDestroy() {
//     document.body.classList.remove('no-scroll');
//   }
// }
